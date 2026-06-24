/* ===================================================================
   KPI Engenharia — Trabalhe Conosco
   Interatividade e validação do formulário
   =================================================================== */
(function () {
  "use strict";

  /* ---- Ano no rodapé ---- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---- Header: muda ao rolar ---- */
  const header = document.getElementById("siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Slider de horas ---- */
  const horas = document.getElementById("hoursPerDay");
  const horasOut = document.getElementById("hoursOut");
  const updateRange = () => {
    horasOut.textContent = horas.value + "h";
    const pct = ((horas.value - horas.min) / (horas.max - horas.min)) * 100;
    horas.style.background =
      `linear-gradient(to right, var(--kpi-blue) 0%, var(--kpi-blue) ${pct}%, var(--line) ${pct}%, var(--line) 100%)`;
  };
  horas.addEventListener("input", updateRange);
  updateRange();

  /* ---- Máscara de telefone (BR) ---- */
  const tel = document.getElementById("phone");
  tel.addEventListener("input", (e) => {
    let v = e.target.value.replace(/\D/g, "").slice(0, 11);
    if (v.length > 6) v = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
    else if (v.length > 2) v = `(${v.slice(0,2)}) ${v.slice(2)}`;
    else if (v.length > 0) v = `(${v}`;
    e.target.value = v;
  });

  /* ---- Dropzone (upload PDF) ---- */
  const dropzone   = document.getElementById("dropzone");
  const fileInput  = document.getElementById("resume");
  const dzInner    = dropzone.querySelector(".dropzone-inner");
  const dzFile     = document.getElementById("dzFile");
  const dzFileName = document.getElementById("dzFileName");
  const dzRemove   = document.getElementById("dzRemove");
  const dzError    = document.getElementById("resumeError");
  const MAX_MB     = 10;

  const showFile = (file) => {
    dzFileName.textContent = `${file.name} — ${(file.size/1024/1024).toFixed(2)} MB`;
    dzInner.hidden = true;
    dzFile.hidden = false;
    dzError.textContent = "";
  };
  const clearFile = () => {
    fileInput.value = "";
    dzInner.hidden = false;
    dzFile.hidden = true;
  };
  const validateFile = (file) => {
    if (!file) return false;
    if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      dzError.textContent = "O arquivo deve estar no formato PDF.";
      clearFile(); return false;
    }
    if (file.size > MAX_MB * 1024 * 1024) {
      dzError.textContent = `O arquivo excede o limite de ${MAX_MB} MB.`;
      clearFile(); return false;
    }
    return true;
  };

  dropzone.addEventListener("click", (e) => {
    if (e.target === dzRemove) return;
    if (dzFile.hidden) fileInput.click();
  });
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file && validateFile(file)) showFile(file);
  });
  dzRemove.addEventListener("click", () => { clearFile(); });

  ["dragenter", "dragover"].forEach(ev =>
    dropzone.addEventListener(ev, (e) => { e.preventDefault(); dropzone.classList.add("dragover"); })
  );
  ["dragleave", "drop"].forEach(ev =>
    dropzone.addEventListener(ev, (e) => { e.preventDefault(); dropzone.classList.remove("dragover"); })
  );
  dropzone.addEventListener("drop", (e) => {
    const file = e.dataTransfer.files[0];
    if (file && validateFile(file)) {
      const dt = new DataTransfer();
      dt.items.add(file);
      fileInput.files = dt.files;
      showFile(file);
    }
  });

  /* ---- Validação do formulário ---- */
  const form = document.getElementById("candidateForm");

  const setError = (field, msg) => {
    const wrap = field.closest(".field");
    if (wrap) wrap.classList.add("invalid");
    const small = wrap ? wrap.querySelector(".error-msg") : null;
    if (small) small.textContent = msg;
  };
  const clearError = (field) => {
    const wrap = field.closest(".field");
    if (wrap) wrap.classList.remove("invalid");
    const small = wrap ? wrap.querySelector(".error-msg") : null;
    if (small && small.id === "") small.textContent = "";
  };

  // limpa erro ao digitar
  form.querySelectorAll("input, select, textarea").forEach(el => {
    el.addEventListener("input", () => clearError(el));
    el.addEventListener("change", () => clearError(el));
  });

  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  function validate() {
    let ok = true;
    let firstInvalid = null;

    const required = ["name", "email", "phone", "city", "pastWork", "hourlyRate"];
    required.forEach(id => {
      const f = document.getElementById(id);
      if (!f.value.trim()) {
        setError(f, "Campo obrigatório.");
        ok = false; firstInvalid = firstInvalid || f;
      }
    });

    // e-mail
    const email = document.getElementById("email");
    if (email.value.trim() && !isEmail(email.value.trim())) {
      setError(email, "Informe um e-mail válido.");
      ok = false; firstInvalid = firstInvalid || email;
    }

    // valor/hora positivo
    const valor = document.getElementById("hourlyRate");
    if (valor.value && Number(valor.value) <= 0) {
      setError(valor, "Informe um valor válido.");
      ok = false; firstInvalid = firstInvalid || valor;
    }

    // currículo
    if (!fileInput.files.length) {
      dzError.textContent = "Anexe seu currículo em PDF.";
      ok = false; firstInvalid = firstInvalid || dropzone;
    }

    // modalidade (>=1)
    if (!form.querySelector('input[name="modality"]:checked')) {
      document.getElementById("modalityError").textContent = "Selecione ao menos uma modalidade.";
      ok = false; firstInvalid = firstInvalid || dropzone;
    } else { document.getElementById("modalityError").textContent = ""; }

    // áreas (>=1)
    if (!form.querySelector('input[name="areas"]:checked')) {
      document.getElementById("areasError").textContent = "Selecione ao menos uma área.";
      ok = false; firstInvalid = firstInvalid || dropzone;
    } else { document.getElementById("areasError").textContent = ""; }

    // viagem (radio)
    if (!form.querySelector('input[name="travel"]:checked')) {
      document.getElementById("travelError").textContent = "Selecione uma opção.";
      ok = false; firstInvalid = firstInvalid || dropzone;
    } else { document.getElementById("travelError").textContent = ""; }

    // consentimento
    const consent = document.getElementById("consent");
    if (!consent.checked) {
      document.getElementById("consentError").textContent = "É necessário autorizar o uso dos dados.";
      ok = false; firstInvalid = firstInvalid || consent;
    } else { document.getElementById("consentError").textContent = ""; }

    if (firstInvalid) firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
    return ok;
  }

  /* ---- Submissão ---- */
  const modal = document.getElementById("successModal");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Collect data
    const data = {
      name:               document.getElementById("name").value.trim(),
      email:              document.getElementById("email").value.trim(),
      phone:              document.getElementById("phone").value.trim(),
      city:               document.getElementById("city").value.trim(),
      linkedin:           document.getElementById("linkedin").value.trim(),
      birthDate:          document.getElementById("birthDate").value,
      modality:           [...form.querySelectorAll('input[name="modality"]:checked')].map(c => c.value),
      hoursPerDay:        horas.value,
      workMode:           document.getElementById("workMode").value,
      startAvailability:  document.getElementById("startAvailability").value,
      travel:             (form.querySelector('input[name="travel"]:checked') || {}).value,
      areas:              [...form.querySelectorAll('input[name="areas"]:checked')].map(c => c.value),
      software:           document.getElementById("software").value.trim(),
      seniority:          document.getElementById("seniority").value,
      pastWork:           document.getElementById("pastWork").value.trim(),
      potentialWork:      document.getElementById("potentialWork").value.trim(),
      yearsExperience:    document.getElementById("yearsExperience").value,
      hourlyRate:         document.getElementById("hourlyRate").value,
      monthlyExpectation: document.getElementById("monthlyExpectation").value,
      notes:              document.getElementById("notes").value.trim(),
    };

    // Build FormData (supports file upload)
    const fd = new FormData();

    // Append scalar fields
    Object.entries(data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(v => fd.append(key, v));
      } else if (value !== undefined && value !== null && value !== "") {
        fd.append(key, value);
      }
    });

    // Append file if present
    if (fileInput.files[0]) {
      fd.append("resume", fileInput.files[0]);
    }

    // Debug: log all fields being sent
    console.group("Candidate submission");
    console.table(
      Object.entries(data).map(([key, value]) => ({
        field: key,
        value: Array.isArray(value) ? value.join(", ") : value,
      }))
    );
    console.log("resume:", fileInput.files[0] ? `${fileInput.files[0].name} (${(fileInput.files[0].size / 1024).toFixed(1)} KB)` : "none");
    console.groupEnd();

    // UI: disable button
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando...";

    try {
      const response = await fetch("http://localhost:4000/api/candidates/", {
        method: "POST",
        body: fd,
        // Do NOT set Content-Type manually — browser sets it with the correct boundary for multipart
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        console.error("[candidates] server error response:", body);
        throw new Error(body?.error?.message || `HTTP ${response.status}`);
      }

      // Success — show modal
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      form.reset();
      clearFile();
      updateRange();

    } catch (error) {
      console.error("Erro ao enviar candidatura:", error);
      alert(`Erro ao enviar: ${error.message}. Tente novamente.`);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Enviar cadastro";
    }
  });

  /* ---- Fechar modal ---- */
  const closeModal = () => { modal.hidden = true; document.body.style.overflow = ""; };
  document.getElementById("modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

})();
