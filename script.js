/* ===================================================================
   KPI Engenharia — Trabalhe Conosco
   Interatividade, validação e internacionalização (PT/EN) do formulário
   =================================================================== */
(function () {
  "use strict";

  /* ---- Backend API base URL ----
     Uses localhost during local development and the deployed backend in production.
     Override anytime by setting window.API_BASE_URL before this script loads. */
  const isLocal = ["localhost", "127.0.0.1"].includes(location.hostname);

  const API_BASE_URL =
    window.API_BASE_URL ||
    (isLocal ? "http://localhost:4000" : "https://diego-cerri-hr-app-be.vercel.app");

  /* ---- HR manager app (admin login) URL ----
     The "Área do RH / HR Area" button points here. Override with window.HR_APP_URL. */
  const HR_APP_URL =
    window.HR_APP_URL ||
    (isLocal ? "http://localhost:3000" : "https://diego-cerri-hr-app-eight.vercel.app");

  const hrLink = document.getElementById("hrAreaLink");
  if (hrLink) {
    hrLink.href = `${HR_APP_URL}/login`;
    hrLink.target = "_blank";
    hrLink.rel = "noopener";
  }

  /* ===================================================================
     INTERNACIONALIZAÇÃO (PT / EN)
     =================================================================== */
  const I18N = {
    pt: {
      nav_home: "Home",
      nav_services: "Serviços",
      nav_projects: "Projetos",
      nav_hr: "Área do RH",
      nav_register: "Cadastre-se",
      hero_eyebrow: "Trabalhe Conosco",
      hero_title: "Faça parte do time de engenharia da KPI",
      hero_sub:
        "Buscamos talentos em projetos industriais, mecânica, piping, elétrica, automação, estrutural e BIM. Cadastre seus dados e seu currículo — entraremos em contato quando houver uma oportunidade alinhada ao seu perfil.",
      hero_cta: "Quero me cadastrar",
      form_title: "Cadastro de Candidato",
      form_subtitle:
        'Preencha as informações abaixo. Campos marcados com <span class="req">*</span> são obrigatórios.',
      legend_contact: "Informações de contato",
      label_name: 'Nome completo <span class="req">*</span>',
      ph_name: "Seu nome completo",
      label_email: 'E-mail <span class="req">*</span>',
      ph_email: "seu@email.com",
      label_phone: 'Telefone / WhatsApp <span class="req">*</span>',
      ph_phone: "(00) 00000-0000",
      label_city: 'Cidade / Estado <span class="req">*</span>',
      ph_city: "Ex.: Rio Claro / SP",
      label_country: 'País <span class="req">*</span>',
      ph_country: "Ex.: Brasil",
      label_linkedin: "LinkedIn / Portfólio",
      ph_linkedin: "https://linkedin.com/in/seu-perfil",
      label_birth: "Data de nascimento",
      legend_resume: "Currículo (PDF)",
      label_resume: 'Anexe seu currículo <span class="req">*</span>',
      dz_text: "<strong>Clique para selecionar</strong> ou arraste o arquivo aqui",
      dz_hint: "Apenas PDF — máximo 10&nbsp;MB",
      legend_modality: "Modalidade e disponibilidade",
      label_modality: 'Modalidade de interesse <span class="req">*</span>',
      opt_full_time: "Full time",
      opt_spot: "Spot / temporário",
      opt_freelancer: "Freelancer / por projeto",
      opt_internship: "Estágio",
      label_hours: 'Horas disponíveis por dia <span class="req">*</span>',
      label_workmode: "Regime de trabalho preferido",
      opt_select: "Selecione...",
      opt_onsite: "Presencial",
      opt_hybrid: "Híbrido",
      opt_remote: "Remoto",
      opt_nopref: "Indiferente",
      label_start: "Disponibilidade para início",
      opt_immediate: "Imediata",
      opt_15days: "Em até 15 dias",
      opt_30days: "Em até 30 dias",
      opt_60days: "Em até 60 dias",
      label_travel: 'Disponibilidade para viagens <span class="req">*</span>',
      opt_travel_yes: "Sim",
      opt_travel_occ: "Eventualmente",
      opt_travel_no: "Não",
      legend_areas: "Áreas de conhecimento",
      label_areas: 'Selecione suas áreas de atuação <span class="req">*</span>',
      area_piping: "Tubulação / Piping",
      area_mechanics: "Mecânica industrial",
      area_structural: "Estrutural",
      area_electrical: "Elétrica",
      area_automation: "Automação",
      area_hvac: "HVAC",
      area_fire: "Combate a incêndio",
      area_bim: "BIM / Modelagem 3D",
      area_scan: "3D Scanning",
      area_pm: "Gestão de projetos",
      area_docs: "Documentação técnica",
      area_vr: "VR / Realidade Virtual",
      label_software: "Softwares e ferramentas que domina",
      ph_software: "Ex.: AutoCAD, Revit, Navisworks, SolidWorks, E3D, Excel...",
      hint_software: "Separe por vírgulas.",
      label_seniority: "Nível de senioridade",
      sen_junior: "Júnior",
      sen_mid: "Pleno",
      sen_senior: "Sênior",
      sen_specialist: "Especialista",
      sen_lead: "Coordenador / Líder",
      legend_experience: "Experiência e capacidades",
      label_pastwork: 'Trabalhos que já executou <span class="req">*</span>',
      ph_pastwork: "Descreva projetos relevantes, setores e seu papel em cada um...",
      label_potential: "Trabalhos que pode executar",
      ph_potential: "Quais tipos de projeto/atividade você está apto a assumir...",
      label_years: "Anos de experiência",
      ph_years: "Ex.: 5",
      legend_comp: "Remuneração e observações",
      label_hourly: 'Valor/hora pretendido (R$) <span class="req">*</span>',
      label_monthly: "Pretensão mensal (CLT/PJ) — opcional",
      label_notes: "Observações adicionais",
      ph_notes: "Algo mais que gostaria de nos contar?",
      consent_text:
        'Autorizo o uso dos meus dados para fins de recrutamento, conforme a LGPD. <span class="req">*</span>',
      btn_submit: "Enviar cadastro",
      btn_reset: "Limpar",
      modal_title: "Cadastro enviado com sucesso!",
      modal_body:
        "Obrigado pelo seu interesse em fazer parte da KPI Engenharia. Recebemos seus dados e entraremos em contato caso haja uma oportunidade alinhada ao seu perfil.",
      modal_close: "Fechar",
      footer_tag:
        "Soluções completas em engenharia industrial com precisão técnica e integração total.",
      footer_rights: "Todos os direitos reservados.",
      // Mensagens dinâmicas (JS)
      msg_required: "Campo obrigatório.",
      msg_email: "Informe um e-mail válido.",
      msg_value: "Informe um valor válido.",
      msg_years: "Informe um valor entre 0 e 100 anos.",
      msg_monthly: "Informe um valor maior ou igual a 0.",
      msg_resume: "Anexe seu currículo em PDF.",
      msg_modality: "Selecione ao menos uma modalidade.",
      msg_areas: "Selecione ao menos uma área.",
      msg_travel: "Selecione uma opção.",
      msg_consent: "É necessário autorizar o uso dos dados.",
      msg_pdf_format: "O arquivo deve estar no formato PDF.",
      msg_pdf_size: "O arquivo excede o limite de {max} MB.",
      msg_submitting: "Enviando...",
      msg_submit_error: "Erro ao enviar: {msg}. Tente novamente.",
    },
    en: {
      nav_home: "Home",
      nav_services: "Services",
      nav_projects: "Projects",
      nav_hr: "HR Area",
      nav_register: "Register",
      hero_eyebrow: "Work With Us",
      hero_title: "Join KPI's engineering team",
      hero_sub:
        "We are looking for talent in industrial projects, mechanics, piping, electrical, automation, structural and BIM. Submit your details and resume — we'll get in touch when there is an opportunity that matches your profile.",
      hero_cta: "I want to register",
      form_title: "Candidate Registration",
      form_subtitle:
        'Fill in the information below. Fields marked with <span class="req">*</span> are required.',
      legend_contact: "Contact information",
      label_name: 'Full name <span class="req">*</span>',
      ph_name: "Your full name",
      label_email: 'Email <span class="req">*</span>',
      ph_email: "you@email.com",
      label_phone: 'Phone / WhatsApp <span class="req">*</span>',
      ph_phone: "(00) 00000-0000",
      label_city: 'City / State <span class="req">*</span>',
      ph_city: "e.g. Rio Claro / SP",
      label_country: 'Country <span class="req">*</span>',
      ph_country: "e.g. Brazil",
      label_linkedin: "LinkedIn / Portfolio",
      ph_linkedin: "https://linkedin.com/in/your-profile",
      label_birth: "Date of birth",
      legend_resume: "Resume (PDF)",
      label_resume: 'Attach your resume <span class="req">*</span>',
      dz_text: "<strong>Click to select</strong> or drag the file here",
      dz_hint: "PDF only — max 10&nbsp;MB",
      legend_modality: "Work type & availability",
      label_modality: 'Preferred work type <span class="req">*</span>',
      opt_full_time: "Full time",
      opt_spot: "Spot / temporary",
      opt_freelancer: "Freelancer / per project",
      opt_internship: "Internship",
      label_hours: 'Available hours per day <span class="req">*</span>',
      label_workmode: "Preferred work mode",
      opt_select: "Select...",
      opt_onsite: "On-site",
      opt_hybrid: "Hybrid",
      opt_remote: "Remote",
      opt_nopref: "No preference",
      label_start: "Start availability",
      opt_immediate: "Immediate",
      opt_15days: "Within 15 days",
      opt_30days: "Within 30 days",
      opt_60days: "Within 60 days",
      label_travel: 'Travel availability <span class="req">*</span>',
      opt_travel_yes: "Yes",
      opt_travel_occ: "Occasionally",
      opt_travel_no: "No",
      legend_areas: "Knowledge areas",
      label_areas: 'Select your areas of expertise <span class="req">*</span>',
      area_piping: "Piping",
      area_mechanics: "Industrial mechanics",
      area_structural: "Structural",
      area_electrical: "Electrical",
      area_automation: "Automation",
      area_hvac: "HVAC",
      area_fire: "Fire protection",
      area_bim: "BIM / 3D modeling",
      area_scan: "3D Scanning",
      area_pm: "Project management",
      area_docs: "Technical documentation",
      area_vr: "VR / Virtual Reality",
      label_software: "Software & tools you master",
      ph_software: "e.g. AutoCAD, Revit, Navisworks, SolidWorks, E3D, Excel...",
      hint_software: "Separate with commas.",
      label_seniority: "Seniority level",
      sen_junior: "Junior",
      sen_mid: "Mid-level",
      sen_senior: "Senior",
      sen_specialist: "Specialist",
      sen_lead: "Coordinator / Lead",
      legend_experience: "Experience & skills",
      label_pastwork: 'Work you have already done <span class="req">*</span>',
      ph_pastwork: "Describe relevant projects, sectors and your role in each...",
      label_potential: "Work you are capable of",
      ph_potential: "Which types of project/activity you can take on...",
      label_years: "Years of experience",
      ph_years: "e.g. 5",
      legend_comp: "Compensation & notes",
      label_hourly: 'Desired hourly rate (R$) <span class="req">*</span>',
      label_monthly: "Monthly expectation (CLT/PJ) — optional",
      label_notes: "Additional notes",
      ph_notes: "Anything else you'd like to tell us?",
      consent_text:
        'I authorise the use of my data for recruitment purposes, in accordance with the LGPD. <span class="req">*</span>',
      btn_submit: "Submit registration",
      btn_reset: "Clear",
      modal_title: "Registration submitted successfully!",
      modal_body:
        "Thank you for your interest in joining KPI Engenharia. We have received your details and will contact you should an opportunity match your profile.",
      modal_close: "Close",
      footer_tag:
        "Complete industrial engineering solutions with technical precision and full integration.",
      footer_rights: "All rights reserved.",
      // Dynamic messages (JS)
      msg_required: "Required field.",
      msg_email: "Enter a valid email.",
      msg_value: "Enter a valid value.",
      msg_years: "Enter a value between 0 and 100 years.",
      msg_monthly: "Enter a value greater than or equal to 0.",
      msg_resume: "Attach your resume in PDF.",
      msg_modality: "Select at least one work type.",
      msg_areas: "Select at least one area.",
      msg_travel: "Select an option.",
      msg_consent: "You must authorise the use of your data.",
      msg_pdf_format: "The file must be in PDF format.",
      msg_pdf_size: "The file exceeds the {max} MB limit.",
      msg_submitting: "Sending...",
      msg_submit_error: "Error submitting: {msg}. Please try again.",
    },
  };

  let currentLang = localStorage.getItem("kpi_lang") === "en" ? "en" : "pt";

  const t = (key, vars) => {
    let str = (I18N[currentLang] && I18N[currentLang][key]) || I18N.pt[key] || key;
    if (vars) {
      Object.entries(vars).forEach(([k, v]) => {
        str = str.replace(`{${k}}`, v);
      });
    }
    return str;
  };

  const langButtons = document.querySelectorAll(".lang-btn");

  function applyLang(lang) {
    currentLang = lang === "en" ? "en" : "pt";
    localStorage.setItem("kpi_lang", currentLang);
    document.documentElement.lang = currentLang === "en" ? "en" : "pt-BR";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key);
      if (el.getAttribute("data-i18n-html") === "true") el.innerHTML = val;
      else el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
    });

    langButtons.forEach((b) =>
      b.classList.toggle("active", b.getAttribute("data-lang") === currentLang),
    );
  }

  langButtons.forEach((btn) =>
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang"))),
  );

  applyLang(currentLang);

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
      dzError.textContent = t("msg_pdf_format");
      clearFile(); return false;
    }
    if (file.size > MAX_MB * 1024 * 1024) {
      dzError.textContent = t("msg_pdf_size", { max: MAX_MB });
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

    const required = ["name", "email", "phone", "city", "country", "pastWork", "hourlyRate"];
    required.forEach(id => {
      const f = document.getElementById(id);
      if (!f.value.trim()) {
        setError(f, t("msg_required"));
        ok = false; firstInvalid = firstInvalid || f;
      }
    });

    // e-mail
    const email = document.getElementById("email");
    if (email.value.trim() && !isEmail(email.value.trim())) {
      setError(email, t("msg_email"));
      ok = false; firstInvalid = firstInvalid || email;
    }

    // valor/hora positivo
    const valor = document.getElementById("hourlyRate");
    if (valor.value && Number(valor.value) <= 0) {
      setError(valor, t("msg_value"));
      ok = false; firstInvalid = firstInvalid || valor;
    }

    // anos de experiência (0–100, igual à validação do backend)
    const anos = document.getElementById("yearsExperience");
    if (anos.value && (Number(anos.value) < 0 || Number(anos.value) > 100)) {
      setError(anos, t("msg_years"));
      ok = false; firstInvalid = firstInvalid || anos;
    }

    // expectativa mensal (>= 0, igual à validação do backend)
    const mensal = document.getElementById("monthlyExpectation");
    if (mensal.value && Number(mensal.value) < 0) {
      setError(mensal, t("msg_monthly"));
      ok = false; firstInvalid = firstInvalid || mensal;
    }

    // currículo
    if (!fileInput.files.length) {
      dzError.textContent = t("msg_resume");
      ok = false; firstInvalid = firstInvalid || dropzone;
    }

    // modalidade (>=1)
    if (!form.querySelector('input[name="modality"]:checked')) {
      document.getElementById("modalityError").textContent = t("msg_modality");
      ok = false; firstInvalid = firstInvalid || dropzone;
    } else { document.getElementById("modalityError").textContent = ""; }

    // áreas (>=1)
    if (!form.querySelector('input[name="areas"]:checked')) {
      document.getElementById("areasError").textContent = t("msg_areas");
      ok = false; firstInvalid = firstInvalid || dropzone;
    } else { document.getElementById("areasError").textContent = ""; }

    // viagem (radio)
    if (!form.querySelector('input[name="travel"]:checked')) {
      document.getElementById("travelError").textContent = t("msg_travel");
      ok = false; firstInvalid = firstInvalid || dropzone;
    } else { document.getElementById("travelError").textContent = ""; }

    // consentimento
    const consent = document.getElementById("consent");
    if (!consent.checked) {
      document.getElementById("consentError").textContent = t("msg_consent");
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
      country:            document.getElementById("country").value.trim(),
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
    submitBtn.textContent = t("msg_submitting");

    try {
      const response = await fetch(`${API_BASE_URL}/api/candidates/`, {
        method: "POST",
        body: fd,
        // Do NOT set Content-Type manually — browser sets it with the correct boundary for multipart
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        console.error("[candidates] server error response:", body);
        // Surface the backend's per-field validation details when present.
        const details = body?.error?.details;
        let detailMsg = "";
        if (details && typeof details === "object") {
          detailMsg = Object.entries(details)
            .map(([field, msgs]) => `${field}: ${[].concat(msgs).join(", ")}`)
            .join("\n");
        }
        const baseMsg = body?.error?.message || `HTTP ${response.status}`;
        throw new Error(detailMsg ? `${baseMsg}\n${detailMsg}` : baseMsg);
      }

      // Success — show modal
      modal.hidden = false;
      document.body.style.overflow = "hidden";
      form.reset();
      clearFile();
      updateRange();

    } catch (error) {
      console.error("Erro ao enviar candidatura:", error);
      alert(t("msg_submit_error", { msg: error.message }));
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = t("btn_submit");
    }
  });

  /* ---- Fechar modal ---- */
  const closeModal = () => { modal.hidden = true; document.body.style.overflow = ""; };
  document.getElementById("modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

})();
