// Mobil Menu açılışı
const bar = document.querySelector('.bars');
const mobilMenu = document.querySelector('.mobile');

bar.addEventListener('click', ()=>{
    mobilMenu.classList.toggle('show');
});

const closeMenu = document.querySelector('.close');
closeMenu.addEventListener('click', ()=>{
    mobilMenu.classList.remove("show")
});

// Esas Swiper
// Əsas Swiper – responsive slayt sayları
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay:{
        delay:3000
    }
  });

  

  
// form
const pricePerPage = 0.80;

  const fullName = document.getElementById("fullName");
  const university = document.getElementById("university");
  const subject = document.getElementById("subject");
  const pageCountInput = document.getElementById("pageCount");
  const serviceTypeSelect = document.getElementById("serviceType");
  const deadlineInput = document.getElementById("deadline");
  const priceDisplay = document.getElementById("price");
  const whatsappLink = document.getElementById("whatsappLink");

  function updateData() {
    const name = fullName.value.trim();
    const uni = university.value.trim();
    const subj = subject.value.trim();
    const pages = parseInt(pageCountInput.value) || 1;
    const serviceType = serviceTypeSelect.value;
    const deadline = deadlineInput.value.trim();
    const total = (pages * pricePerPage).toFixed(2);
    priceDisplay.textContent = total;

    let message = `📋 *Sifariş Məlumatı*%0A`;
    if (name) message += ` Ad Soyad: ${name}%0A`;
    if (uni) message += `🏫 Müəssisə: ${uni}%0A`;
    if (subj) message += `📚 Mövzu: ${subj}%0A`;
    message += `🔧 Xidmət növü: ${serviceType}%0A`;
    message += `📄 Səhifə sayı: ${pages}%0A`;
    message += `💰 Qiymət: ${total} AZN%0A`;
    if (deadline) message += `⏰ Təhvil vaxtı: ${deadline}`;

    const phone = "994707957863"; // <- öz WhatsApp nömrənizi yazın
    const url = `https://wa.me/${phone}?text=${message}`;
    whatsappLink.href = url;
  }

  // Bütün inputlara qulaq as
  [fullName, university, subject, pageCountInput, serviceTypeSelect, deadlineInput].forEach(el => {
    el.addEventListener("input", updateData);
    el.addEventListener("change", updateData);
  });

  updateData(); // Səhifə yüklənəndə

