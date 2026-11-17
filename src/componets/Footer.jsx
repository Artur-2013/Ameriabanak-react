import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Վերևի իրավական նախազգուշացում */}
        <div className="footer-top-disclaimer">
          <p>
            Կայքի որևէ տեղեկության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն,
            ինչպես նաև ռուսերեն և անգլերեն տեքստերում ոչ ամբողջական նյութ տեսնելու դեպքում
            խնդրում ենք առաջնորդվել հայերեն տարբերակով:
          </p>
          <p>
            Բանկը պատասխանատվություն չի կրում այլ ինտերնետային կայքերի բովանդակության ստուգման
            և արժանահավատության, այնտեղ տեղադրված գովազդների հետևանքների համար, և
            ֆինանսական կազմակերպությունը պատասխանատվություն չի կրում այդ ինտերնետային
            կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
          </p>
        </div>

        {/* Միջին հիմնական սյունակներ */}
        <div className="footer-columns-grid">
          {/* Սյունակ 1: Հիմնական */}
          <div className="footer-col">
            <h4 className="footer-col-title">Հիմնական</h4>
            <ul className="footer-links-list">
              <li><a href="#about">Բանկի մասին</a></li>
              <li><a href="#achievements">Բանկի հիմնական ձեռքբերումները</a></li>
              <li><a href="#reports">Հաշվետվություններ</a></li>
              <li><a href="#facts">Էական փաստեր</a></li>
              <li><a href="#ethics">Էթիկայի կանոններ</a></li>
              <li><a href="#executives">Բանկի ղեկավարները</a></li>
              <li><a href="#governance">Կորպորատիվ կառավարում</a></li>
              <li><a href="#significant">Նշանակալից մասնակցություն ունեցող անձինք</a></li>
              <li><a href="#branches">Մասնաճյուղեր և բանկոմատներ</a></li>
              <li><a href="#shareholders">Բաժնետերեր և ներդրողներ</a></li>
              <li><a href="#structure">Բանկի կառուցվածքը</a></li>
              <li><a href="#helper">Ամերիա Օգնական</a></li>
              <li><a href="#feedback">Հետադարձ կապ</a></li>
            </ul>
          </div>

          {/* Սյունակ 2: Այլ տեղեկատվություն */}
          <div className="footer-col">
            <h4 className="footer-col-title">Այլ տեղեկատվություն</h4>
            <ul className="footer-links-list">
              <li><a href="#news">Նորություններ</a></li>
              <li><a href="#blog">Բլոգ</a></li>
              <li><a href="#csr">ԿՍՊ (CSR)</a></li>
              <li><a href="#proposal">Համագործակցության առաջարկ</a></li>
              <li><a href="#more">Ավելին</a></li>
              <li><a href="#property">Բանկի կողմից օտարվող գույք</a></li>
              <li><a href="#tenders">Գնումներ</a></li>
              <li><a href="#legal-acts">Իրավական ակտեր</a></li>
              <li><a href="#nostro">Հիմնական նոստրո հաշիվներ</a></li>
              <li><a href="#rights">Հաճախորդների իրավունքներ</a></li>
              <li><a href="#complaint">Կարծիքի/բողոքի օնլայն հայտ</a></li>
              <li><a href="#insurance">Ապահովագրական ընկերությունների ցանկ</a></li>
              <li><a href="#partner-eval">Համագործակցող գնահատող ընկերությունների ցանկ</a></li>
              <li><a href="#useful-links">Օգտակար հղումներ</a></li>
              <li><a href="#security-tips">Ֆինանսական անվտանգության խորհուրդներ</a></li>
              <li><a href="#stop-tools">Stop գործիքներ</a></li>
            </ul>
          </div>

          {/* Սյունակ 3: Աշխատանք */}
          <div className="footer-col">
            <h4 className="footer-col-title">Աշխատանք</h4>
            <ul className="footer-links-list">
              <li><a href="#team">Ամերիա թիմ</a></li>
              <li><a href="#why-us">Ինչու մեզ հետ</a></li>
              <li><a href="#youth">Երիտասարդներին</a></li>
              <li><a href="#generation">Ամերիա սերունդ</a></li>
              <li><a href="#jobs">Աշխատատեղեր</a></li>
            </ul>
          </div>

          {/* Սյունակ 4: Կոնտակտներ */}
          <div className="footer-col footer-contacts-col">
            <div className="footer-contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong className="contact-label">ԳԼԽԱՄԱՍԱՅԻՆ ԳՐԱՍԵՆՅԱԿ</strong>
                <p className="contact-text">Վազգեն Սարգսյան 2, Երևան 0010</p>
              </div>
            </div>

            <div className="footer-contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong className="contact-label">Հեռախոսահամար՝</strong>
                <p className="contact-text">(+37410) 56 11 11 կամ (+37412) 56 11 11</p>
              </div>
            </div>

            <div className="footer-contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <p className="contact-text email-text">info@ameriabank.am</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ներքևի սոցիալական ցանցեր և կարգավորում */}
        <div className="footer-bottom-row">
          <div className="footer-social-icons">
            <a href="#facebook" aria-label="Facebook">f</a>
            <a href="#linkedin" aria-label="LinkedIn">in</a>
            <a href="#youtube" aria-label="YouTube">▶</a>
            <a href="#instagram" aria-label="Instagram">📷</a>
            <a href="#telegram" aria-label="Telegram">✈</a>
            <a href="#x" aria-label="X">𝕏</a>
            <a href="#tiktok" aria-label="TikTok">♪</a>
          </div>
          <p className="footer-regulation-text">
            Ամերիաբանկ ՓԲԸ-ն վերահսկվում է ՀՀ ԿԲ կողմից:
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;