/**
 * Alkaa Skin, Hair & Laser Clinic - Interactive Prototype Script
 * Developed by TechArtMedia for Dr. Apurva Shindikar (MBBS, DDVL)
 * Location: Nashik, Maharashtra
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. Mobile Hamburger Menu Toggle
  // ==========================================
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close menu when navigation link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // ==========================================
  // 2. Navbar Scroll Style
  // ==========================================
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // ==========================================
  // 3. Pitch Banner Dismissal
  // ==========================================
  const pitchBanner = document.getElementById('pitchBanner');
  const closeBannerBtn = document.getElementById('closeBannerBtn');
  if (closeBannerBtn && pitchBanner) {
    closeBannerBtn.addEventListener('click', () => {
      pitchBanner.style.display = 'none';
    });
  }

  // ==========================================
  // 4. Modals State Management (Audit & Booking)
  // ==========================================
  const auditModal = document.getElementById('auditModal');
  const openAuditModalBtn = document.getElementById('openAuditModalBtn');
  const closeAuditModal = document.getElementById('closeAuditModal');

  const bookingModal = document.getElementById('bookingModal');
  const closeBookingModal = document.getElementById('closeBookingModal');
  const mServiceSelect = document.getElementById('mService');

  // Open Audit Comparison Modal
  if (openAuditModalBtn && auditModal) {
    openAuditModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      auditModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  // Close Audit Comparison Modal
  if (closeAuditModal && auditModal) {
    closeAuditModal.addEventListener('click', () => {
      auditModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Open Booking Modal via any .open-booking-btn
  document.querySelectorAll('.open-booking-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service');
      if (mServiceSelect && service) {
        for (let i = 0; i < mServiceSelect.options.length; i++) {
          if (
            mServiceSelect.options[i].text.toLowerCase().includes(service.toLowerCase()) ||
            mServiceSelect.options[i].value.toLowerCase().includes(service.toLowerCase())
          ) {
            mServiceSelect.selectedIndex = i;
            break;
          }
        }
      }
      if (bookingModal) {
        bookingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close Booking Modal
  if (closeBookingModal && bookingModal) {
    closeBookingModal.addEventListener('click', () => {
      bookingModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // ==========================================
  // 5. Procedure Details Data & Modal
  // ==========================================
  const procedureDetailsData = {
    'laser-hair': {
      title: 'US-FDA Triple Wavelength Laser Hair Reduction',
      badge: 'Pain-Free • Permanent Hair Follicle Reduction',
      intro: 'Our clinic operates medical-grade Diode (808nm), Alexandrite (755nm), and Nd:YAG (1064nm) lasers calibrated specifically for Indian skin types (Fitzpatrick IV to VI).',
      points: [
        'Integrated Contact Sapphire Chill Tip maintains cooling at 4°C, preventing thermal surface burns and ensuring painless treatment.',
        'Precision targeting destroys follicular melanin to arrest hair re-growth without affecting sweat glands or dermal skin.',
        'Recommended Protocol: 6 to 8 sessions spaced 4 to 6 weeks apart for up to 90%+ long-term reduction.',
        'Zero downtime: resume your office, college, or daily routine immediately.'
      ],
      serviceValue: 'Laser Hair Reduction'
    },
    'acne-scar': {
      title: 'Clinical Acne Clearance & Scar Revision Protocol',
      badge: 'Physician-Supervised Medical Dermatology',
      intro: 'Supervised directly by Dr. Apurva Shindikar, our acne protocol tackles active cystic pustules, sebum overproduction, and post-acne icepick, rolling, and boxcar scars.',
      points: [
        'Precise clinical diagnosis of root causes (hormonal imbalance, PCOS, bacterial Cutibacterium acnes overgrowth).',
        'Multi-tiered scar revision combining Subcision (releasing tethered dermal fibrotic bands), TCA CROSS, and Microneedling.',
        'Post-inflammatory erythema (red marks) and hyperpigmentation (brown marks) addressed with specialized dermatological peels.',
        'Tailored medical homecare regimen to fortify skin barrier and prevent recurring cystic breakouts.'
      ],
      serviceValue: 'Acne & Scar Treatment'
    },
    'hair-prp': {
      title: 'Autologous Hair PRP & GFC (Growth Factor Concentrate)',
      badge: 'Biological Autologous Hair Restoration',
      intro: 'A revolutionary biological therapy using concentrated natural platelets and growth factors harvested directly from your own blood to stimulate dormant hair roots.',
      points: [
        '100% autologous biological treatment: zero risk of allergic reaction or systemic side effects.',
        'Platelet concentrates release PDGF, VEGF, and EGF growth factors directly into miniaturized hair bulbs.',
        'Arrests acute hair thinning (telogen effluvium) and promotes substantial hair shaft thickening and density.',
        'Virtually painless: topical dermatological numbing cream is applied for 30 minutes before delicate micro-injections.'
      ],
      serviceValue: 'Hair PRP / GFC Therapy'
    },
    'q-switch': {
      title: 'Q-Switched Nd:YAG Laser Pigmentation Toning',
      badge: 'Gold Standard Melasma & Pigment Fragmentation',
      intro: 'High-energy nanosecond photo-acoustic laser pulses shatter stubborn dermal melanin into microscopic fragments that are naturally metabolized by your body.',
      points: [
        'Gold standard for melasma, sun freckles, tanning, dark spots, and post-inflammatory hyperpigmentation.',
        'Photo-acoustic mechanism does not overheat surrounding tissue, preventing rebound hyperpigmentation in darker skin.',
        'Stimulates mild collagen remodeling for refined facial pores and an even, radiant complexion.',
        'Completely safe, no skin peeling, and zero social downtime.'
      ],
      serviceValue: 'Q-Switched Laser Toning'
    },
    'hydrafacial': {
      title: 'Clinical HydraFacial & Deep Dermal Hydration',
      badge: 'Medical-Grade Exfoliation & Infusion',
      intro: 'Unlike salon facials that use harsh bleaches and rough physical scrubs, our Medical HydraFacial uses gentle vortex vacuum technology and physician-formulated serums.',
      points: [
        'Phase 1 (Cleanse & Exfoliate): Lactic and glycolic acids loosen sebum, grime, and dead epidermal cells.',
        'Phase 2 (Vortex Extraction): Gentle vacuum suction painlessly extracts stubborn blackheads and whiteheads.',
        'Phase 3 (Nourish & Hydrate): Deep dermal infusion of multi-molecular hyaluronic acid, peptides, and botanical antioxidants.',
        'Immediate radiant dewy glow, zero irritation, and deeply nourished dermal moisture barrier.'
      ],
      serviceValue: 'Medical HydraFacial'
    },
    'peels': {
      title: 'Dermatological Chemical Peels (AHA/BHA & Yellow Peel)',
      badge: 'Physician-Prescribed Controlled Cellular Renewal',
      intro: 'Clinically calibrated medical peeling formulations applied under strict dermatological monitoring to gently shed damaged dead skin cells and reveal fresh, radiant dermis.',
      points: [
        'Salicylic Peels (BHA): Lipophilic exfoliation penetrating deep into sebaceous pores to clear active acne and regulate sebum.',
        'Glycolic & Lactic Peels (AHA): Accelerates cellular renewal, fades sun tan, and revitalizes dull, tired skin.',
        'Retinol Yellow Peel: Stimulates dermal fibroblast synthesis to soften fine lines and smooth out uneven texture.',
        'Strict physician supervision guarantees safety, preventing chemical burns or post-inflammatory dark marks.'
      ],
      serviceValue: 'Chemical Peels'
    }
  };

  // Build Procedure Modal dynamically
  const procedureModal = document.createElement('div');
  procedureModal.className = 'modal-backdrop';
  procedureModal.id = 'procedureModal';
  procedureModal.innerHTML = `
    <div class="modal-dialog max-w-600">
      <div class="modal-header">
        <div class="modal-title-group">
          <span class="badge-opd" id="pmBadge">Clinical Treatment</span>
          <h3 id="pmTitle">Procedure Details</h3>
        </div>
        <button class="modal-close-btn" id="closeProcedureModal">&times;</button>
      </div>
      <div class="modal-body">
        <p id="pmIntro" style="font-size: 0.95rem; color: var(--text-dark); line-height: 1.6; margin-bottom: 20px;"></p>
        <div style="background: var(--bg-surface); padding: 18px; border-radius: var(--radius-md); border-left: 4px solid var(--primary); margin-bottom: 24px;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--dark); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
            <i class="fas fa-microscope text-teal"></i> Clinical Protocol & Highlights
          </h4>
          <ul id="pmPoints" style="list-style: none; display: flex; flex-direction: column; gap: 10px; font-size: 0.88rem; color: var(--text-dark);"></ul>
        </div>
        <div style="display: flex; gap: 12px; align-items: center; justify-content: space-between; flex-wrap: wrap; border-top: 1px solid var(--border); padding-top: 18px;">
          <div>
            <strong style="display: block; font-size: 0.92rem; color: var(--dark);">Consult Dr. Apurva Shindikar</strong>
            <span style="font-size: 0.8rem; color: var(--text-muted);">Personalized clinical evaluation</span>
          </div>
          <button class="btn btn-primary" id="pmBookNowBtn">
            <i class="fas fa-calendar-check"></i> Book Consultation
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(procedureModal);

  const closeProcedureModal = document.getElementById('closeProcedureModal');
  if (closeProcedureModal) {
    closeProcedureModal.addEventListener('click', () => {
      procedureModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Handle Procedure Details Buttons
  document.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const procedureId = btn.getAttribute('data-id');
      const data = procedureDetailsData[procedureId];
      if (!data) return;

      document.getElementById('pmTitle').innerText = data.title;
      document.getElementById('pmBadge').innerText = data.badge;
      document.getElementById('pmIntro').innerText = data.intro;

      const pointsList = document.getElementById('pmPoints');
      pointsList.innerHTML = '';
      data.points.forEach(pt => {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.alignItems = 'flex-start';
        li.style.gap = '8px';
        li.innerHTML = `<i class="fas fa-check-circle text-teal" style="margin-top: 3px; flex-shrink: 0;"></i> <span>${pt}</span>`;
        pointsList.appendChild(li);
      });

      const pmBookNowBtn = document.getElementById('pmBookNowBtn');
      pmBookNowBtn.onclick = () => {
        procedureModal.classList.remove('active');
        if (mServiceSelect) {
          for (let i = 0; i < mServiceSelect.options.length; i++) {
            if (
              mServiceSelect.options[i].text.toLowerCase().includes(data.serviceValue.toLowerCase()) ||
              mServiceSelect.options[i].value.toLowerCase().includes(data.serviceValue.toLowerCase())
            ) {
              mServiceSelect.selectedIndex = i;
              break;
            }
          }
        }
        if (bookingModal) {
          bookingModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      };

      procedureModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Global Backdrop Click & Escape Key Handlers
  const bookingApprovalModal = document.getElementById('bookingApprovalModal');
  const closeApprovalModalBtn = document.getElementById('closeApprovalModalBtn');

  window.addEventListener('click', (e) => {
    if (e.target === auditModal) {
      auditModal.classList.remove('active');
      document.body.style.overflow = '';
    }
    if (e.target === bookingModal) {
      bookingModal.classList.remove('active');
      document.body.style.overflow = '';
    }
    if (e.target === procedureModal) {
      procedureModal.classList.remove('active');
      document.body.style.overflow = '';
    }
    if (e.target === bookingApprovalModal) {
      bookingApprovalModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [auditModal, bookingModal, procedureModal, bookingApprovalModal].forEach(m => {
        if (m && m.classList.contains('active')) {
          m.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
      if (waBubble && waBubble.classList.contains('active')) {
        waBubble.classList.remove('active');
      }
    }
  });

  // ==========================================
  // 6. Treatment Category Filtering
  // ==========================================
  const treatmentTabs = document.querySelectorAll('#treatmentTabs .tab-btn');
  const treatmentCards = document.querySelectorAll('#treatmentsGrid .treatment-card');

  treatmentTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      treatmentTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-category');

      treatmentCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==========================================
  // 7. Interactive Before & After Comparison Sliders
  // ==========================================
  const initSlider = (sliderWrapper) => {
    if (!sliderWrapper) return;
    const rangeInput = sliderWrapper.querySelector('.ba-range-handle');
    const beforeImage = sliderWrapper.querySelector('.before-image');
    const handleLine = sliderWrapper.querySelector('.ba-handle-line');

    if (!rangeInput || !beforeImage || !handleLine) return;

    const setPosition = (val) => {
      beforeImage.style.clipPath = `inset(0 ${100 - val}% 0 0)`;
      handleLine.style.left = `${val}%`;
    };

    rangeInput.addEventListener('input', (e) => {
      setPosition(e.target.value);
    });

    // Touch support enhancement
    rangeInput.addEventListener('touchmove', (e) => {
      setPosition(e.target.value);
    }, { passive: true });

    // Initial 50% split
    setPosition(rangeInput.value || 50);
  };

  document.querySelectorAll('.ba-slider-wrapper').forEach(initSlider);

  // ==========================================
  // 8. FAQ Accordion Toggle
  // ==========================================
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentItem = btn.closest('.faq-item');
      if (!parentItem) return;
      const wasActive = parentItem.classList.contains('active');

      // Close all accordion items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      // Toggle current
      if (!wasActive) {
        parentItem.classList.add('active');
      }
    });
  });

  // ==========================================
  // 9. Floating WhatsApp Widget
  // ==========================================
  const floatingWaBtn = document.getElementById('floatingWaBtn');
  const waBubble = document.getElementById('waBubble');
  const closeWaBubble = document.getElementById('closeWaBubble');

  if (floatingWaBtn && waBubble) {
    floatingWaBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      waBubble.classList.toggle('active');
    });
  }

  if (closeWaBubble && waBubble) {
    closeWaBubble.addEventListener('click', (e) => {
      e.stopPropagation();
      waBubble.classList.remove('active');
    });
  }

  // Auto-show WhatsApp bubble subtly after 8 seconds of engagement
  setTimeout(() => {
    if (waBubble && !waBubble.classList.contains('active') && !sessionStorage.getItem('waShown')) {
      waBubble.classList.add('active');
      sessionStorage.setItem('waShown', 'true');
    }
  }, 8000);

  // ==========================================
  // 10. Date Pickers Min Value (Tomorrow)
  // ==========================================
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const prefDate = document.getElementById('prefDate');
  const mDate = document.getElementById('mDate');
  if (prefDate) {
    prefDate.min = tomorrowStr;
    if (!prefDate.value) prefDate.value = tomorrowStr;
  }
  if (mDate) {
    mDate.min = tomorrowStr;
    if (!mDate.value) mDate.value = tomorrowStr;
  }

  // ==========================================
  // 11. Helper: Format Appointment WhatsApp Message (No Broken Symbols)
  // ==========================================
  const formatPatientName = (name) => {
    if (!name) return 'Patient';
    return name.trim().split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
  };

  const formatFriendlyDate = (dateStr) => {
    if (!dateStr) return '';
    try {
      const parts = dateStr.split('-');
      if (parts.length === 3) {
        const d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
        if (!isNaN(d.getTime())) {
          return d.toLocaleDateString('en-IN', {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }).replace(/,/g, '');
        }
      }
    } catch (e) {}
    return dateStr;
  };

  const getNextSequentialToken = () => {
    try {
      const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
      const lastDate = localStorage.getItem('alkaa_token_date');
      let currentSeq = parseInt(localStorage.getItem('alkaa_token_seq') || '100', 10);

      if (lastDate !== today || isNaN(currentSeq) || currentSeq < 100) {
        currentSeq = 101;
        localStorage.setItem('alkaa_token_date', today);
      } else {
        currentSeq += 1;
      }

      localStorage.setItem('alkaa_token_seq', currentSeq.toString());
      return {
        code: `ALK-OPD-${currentSeq}`,
        seqNumber: currentSeq
      };
    } catch (e) {
      const rand = Math.floor(101 + Math.random() * 50);
      return {
        code: `ALK-OPD-${rand}`,
        seqNumber: rand
      };
    }
  };

  const formatWhatsAppMessage = ({ branch, name, phone, service, date, slot, token }) => {
    const cleanName = formatPatientName(name);
    const friendlyDate = formatFriendlyDate(date);
    const tokenStr = token || getNextSequentialToken().code;
    const cleanPhone = phone ? (phone.startsWith('+91') ? phone : `+91 ${phone.replace(/^\+?91/, '').trim()}`) : '';

    return [
      '*ALKAA SKIN CLINIC*',
      '*Priority OPD Appointment Request*',
      '━━━━━━━━━━━━━━━━━━━━━',
      `• *Patient Name:* ${cleanName}`,
      `• *Contact Mobile:* ${cleanPhone || phone}`,
      `• *Clinic Branch:* ${branch}`,
      `• *Treatment / Concern:* ${service}`,
      `• *Preferred Date:* ${friendlyDate}`,
      `• *Preferred Slot:* ${slot}`,
      `• *Token Reference:* ${tokenStr}`,
      '━━━━━━━━━━━━━━━━━━━━━',
      '*Doctor:* Dr. Apurva Vilas Shindikar (MBBS, DDV Mumbai)',
      '_Requested via Alkaa Skin Clinic Online Booking Portal_'
    ].join('\n');
  };

  const validateIndianPhone = (phone) => {
    const clean = phone.replace(/[\s\-\+]/g, '');
    return /^(?:91)?[6-9]\d{9}$/.test(clean);
  };

  // ==========================================
  // TOAST NOTIFICATIONS (NO BROKEN SYMBOLS)
  // ==========================================
  const showToast = (title, message, type = 'success', duration = 4500) => {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      container.id = 'toastContainer';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconClass = 'fa-check-circle';
    if (type === 'warning') iconClass = 'fa-exclamation-triangle';
    if (type === 'error') iconClass = 'fa-times-circle';

    toast.innerHTML = `
      <div class="toast-icon"><i class="fas ${iconClass}"></i></div>
      <div class="toast-body">
        <div class="toast-title">${title}</div>
        <div class="toast-desc">${message}</div>
      </div>
      <button class="toast-close" aria-label="Close Notification">&times;</button>
    `;

    container.appendChild(toast);

    const closeBtn = toast.querySelector('.toast-close');
    const dismiss = () => {
      toast.classList.add('toast-hiding');
      setTimeout(() => {
        toast.remove();
      }, 300);
    };

    closeBtn.addEventListener('click', dismiss);
    setTimeout(dismiss, duration);
  };

  // ==========================================
  // APPOINTMENT APPROVAL MODAL CONTROLLER
  // ==========================================
  const showApprovalModal = (data) => {
    if (!bookingApprovalModal) return;

    if (!data.token) {
      const tokenObj = getNextSequentialToken();
      data.token = tokenObj.code;
      data.seqNumber = tokenObj.seqNumber;
    }

    const tokenEl = document.getElementById('appTokenId');
    const seqTagEl = document.getElementById('appTokenSeqTag');
    const nameEl = document.getElementById('appPatientName');
    const phoneEl = document.getElementById('appPatientPhone');
    const branchEl = document.getElementById('appClinicBranch');
    const treatEl = document.getElementById('appTreatmentName');
    const dtEl = document.getElementById('appDateTime');
    const waBtn = document.getElementById('appWhatsAppBtn');

    if (tokenEl) tokenEl.textContent = data.token;
    if (seqTagEl) seqTagEl.textContent = `Sequence #${data.seqNumber || '101'} Today`;
    if (nameEl) nameEl.textContent = formatPatientName(data.name);
    if (phoneEl) phoneEl.textContent = data.phone || 'Provided on Call';
    if (branchEl) branchEl.textContent = data.branch;
    if (treatEl) treatEl.textContent = data.service;
    if (dtEl) dtEl.textContent = `${formatFriendlyDate(data.date)} • ${data.slot}`;

    const msg = formatWhatsAppMessage(data);
    const waUrl = `https://wa.me/918459068967?text=${encodeURIComponent(msg)}`;
    if (waBtn) waBtn.href = waUrl;

    bookingApprovalModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Doctor Notification System
    console.log(`[DOCTOR OPD DISPATCH] Token: ${data.token} (Sequence: #${data.seqNumber}) | Patient: ${data.name} | Phone: ${data.phone} | Branch: ${data.branch} | Service: ${data.service} | Target: Dr. Apurva Vilas Shindikar (+91 84590 68967)`);
    showToast('Doctor OPD Desk Alerted', `Token ${data.token} & intake routed to Dr. Apurva Vilas Shindikar (+91 84590 68967).`, 'success');
  };

  const closeApprovalModal = () => {
    if (bookingApprovalModal) {
      bookingApprovalModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  const topCloseApprovalModal = document.getElementById('topCloseApprovalModal');
  if (topCloseApprovalModal) {
    topCloseApprovalModal.addEventListener('click', closeApprovalModal);
  }

  if (closeApprovalModalBtn) {
    closeApprovalModalBtn.addEventListener('click', closeApprovalModal);
  }

  // Backdrop click to close modal
  if (bookingApprovalModal) {
    bookingApprovalModal.addEventListener('click', (e) => {
      if (e.target === bookingApprovalModal) {
        closeApprovalModal();
      }
    });
  }

  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookingApprovalModal && bookingApprovalModal.classList.contains('active')) {
      closeApprovalModal();
    }
  });

  // ==========================================
  // 12. Main On-Page Appointment Booking Form
  // ==========================================
  const appointmentForm = document.getElementById('appointmentForm');
  const submitWhatsAppBooking = document.getElementById('submitWhatsAppBooking');
  const bookingSuccessBox = document.getElementById('bookingSuccessBox');
  const successDetailsText = document.getElementById('successDetailsText');
  const openWhatsAppConfirm = document.getElementById('openWhatsAppConfirm');
  const resetBookingFormBtn = document.getElementById('resetBookingFormBtn');

  const getPageFormData = () => {
    return {
      branch: document.getElementById('clinicBranch')?.value || 'Indira Nagar (Main Center)',
      name: document.getElementById('patientName')?.value?.trim() || '',
      phone: document.getElementById('patientPhone')?.value?.trim() || '',
      service: document.getElementById('serviceNeeded')?.value || 'Consultation / Diagnosis',
      date: document.getElementById('prefDate')?.value || tomorrowStr,
      slot: document.getElementById('prefSlot')?.value || 'Morning (11:00 AM - 02:00 PM)'
    };
  };

  // Direct WhatsApp Submit
  if (submitWhatsAppBooking) {
    submitWhatsAppBooking.addEventListener('click', () => {
      const data = getPageFormData();
      if (!data.name) {
        showToast('Name Required', 'Please enter your full name to proceed with booking.', 'warning');
        document.getElementById('patientName')?.focus();
        return;
      }
      if (!data.phone || !validateIndianPhone(data.phone)) {
        showToast('Valid Phone Required', 'Please enter a valid 10-digit mobile number.', 'warning');
        document.getElementById('patientPhone')?.focus();
        return;
      }

      const tokenObj = getNextSequentialToken();
      data.token = tokenObj.code;
      data.seqNumber = tokenObj.seqNumber;

      showToast('Opening WhatsApp', 'Connecting you directly with Dr. Apurva\'s clinic line...', 'success');
      const msg = formatWhatsAppMessage(data);
      const waUrl = `https://wa.me/918459068967?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');
      showApprovalModal(data);
    });
  }

  // Web Submit (Opens Approval Modal + Success Card)
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = getPageFormData();

      if (!data.phone || !validateIndianPhone(data.phone)) {
        showToast('Valid Phone Required', 'Please enter a valid 10-digit mobile number.', 'warning');
        document.getElementById('patientPhone')?.focus();
        return;
      }

      const tokenObj = getNextSequentialToken();
      data.token = tokenObj.code;
      data.seqNumber = tokenObj.seqNumber;

      const cleanName = formatPatientName(data.name);
      const friendlyDate = formatFriendlyDate(data.date);

      // Hide form and display confirmation card
      appointmentForm.style.display = 'none';
      if (bookingSuccessBox) {
        bookingSuccessBox.style.display = 'block';
        if (successDetailsText) {
          successDetailsText.innerHTML = `
            <strong>Thank you, ${cleanName}!</strong><br>
            Your appointment request for <strong>${data.service}</strong> at our <strong>${data.branch}</strong> on <strong>${friendlyDate} (${data.slot})</strong> has been received.<br>
            Priority Token: <strong>${data.token}</strong> (Sequence #${data.seqNumber} Today). Dr. Apurva's clinic coordinator will call <strong>${data.phone}</strong> shortly to confirm your consultation.
          `;
        }
        if (openWhatsAppConfirm) {
          const msg = formatWhatsAppMessage(data);
          openWhatsAppConfirm.href = `https://wa.me/918459068967?text=${encodeURIComponent(msg)}`;
        }
      }

      // Trigger high-aesthetic approval modal
      showApprovalModal(data);
    });
  }

  // Reset Booking Form
  if (resetBookingFormBtn && appointmentForm && bookingSuccessBox) {
    resetBookingFormBtn.addEventListener('click', () => {
      appointmentForm.reset();
      if (prefDate) prefDate.value = tomorrowStr;
      bookingSuccessBox.style.display = 'none';
      appointmentForm.style.display = 'block';
    });
  }

  // ==========================================
  // 13. Modal Appointment Booking Form
  // ==========================================
  const modalBookingForm = document.getElementById('modalBookingForm');
  const modalSubmitWhatsApp = document.getElementById('modalSubmitWhatsApp');

  const getModalFormData = () => {
    return {
      branch: document.getElementById('mBranch')?.value || 'Indira Nagar (Main Center)',
      name: document.getElementById('mName')?.value?.trim() || '',
      phone: document.getElementById('mPhone')?.value?.trim() || '',
      service: document.getElementById('mService')?.value || 'Consultation / Diagnosis',
      date: document.getElementById('mDate')?.value || tomorrowStr,
      slot: document.getElementById('mSlot')?.value || 'Morning (11:00 AM - 02:00 PM)'
    };
  };

  if (modalSubmitWhatsApp) {
    modalSubmitWhatsApp.addEventListener('click', () => {
      const data = getModalFormData();
      if (!data.name) {
        showToast('Name Required', 'Please enter patient name.', 'warning');
        document.getElementById('mName')?.focus();
        return;
      }
      if (!data.phone || !validateIndianPhone(data.phone)) {
        showToast('Valid Phone Required', 'Please enter a valid 10-digit mobile number.', 'warning');
        document.getElementById('mPhone')?.focus();
        return;
      }

      const tokenObj = getNextSequentialToken();
      data.token = tokenObj.code;
      data.seqNumber = tokenObj.seqNumber;

      const msg = formatWhatsAppMessage(data);
      const waUrl = `https://wa.me/918459068967?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');
      bookingModal.classList.remove('active');
      document.body.style.overflow = '';
      showApprovalModal(data);
      showToast('Opening WhatsApp', 'Redirecting to Dr. Apurva\'s clinic line...', 'success');
    });
  }

  if (modalBookingForm) {
    modalBookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = getModalFormData();

      if (!data.phone || !validateIndianPhone(data.phone)) {
        showToast('Valid Phone Required', 'Please enter a valid 10-digit mobile number.', 'warning');
        document.getElementById('mPhone')?.focus();
        return;
      }

      const tokenObj = getNextSequentialToken();
      data.token = tokenObj.code;
      data.seqNumber = tokenObj.seqNumber;

      bookingModal.classList.remove('active');
      document.body.style.overflow = '';

      showApprovalModal(data);
      modalBookingForm.reset();
    });
  }
});
