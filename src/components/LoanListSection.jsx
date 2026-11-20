export default function LoanListSection() {
  return (
    <>
      <section className="split-section bg-white">
        <div className="container split-container">
          <div className="split-content">
            <h2>Սպառողական վարկեր</h2>
            <p className="section-desc">Չնախատեսված անձնական և ընտանեկան ծախսերի դեպքում:</p>
            <ul className="loan-list">
              <li><span className="arrow">→</span> Սպառողական վարկ</li>
              <li><span className="arrow">→</span> Օվերդրաֆտ</li>
              <li><span className="arrow">→</span> Վարկային գիծ</li>
            </ul>
            <div className="btn-group">
              <button className="btn-green">Դիմիր օնլայն</button>
              <button className="btn-outline">Տես բոլորը</button>
            </div>
          </div>
          <div className="split-image">
            <img src="https://ameriabank.am/Portals/0/Images/loans/scoring-loans.png" alt="Սպառողական" />
          </div>
        </div>
      </section>

      <section className="split-section bg-gray">
        <div className="container split-container reverse">
          <div className="split-content">
            <h2>Հիփոթեքային վարկեր</h2>
            <p className="section-desc">Եթե հիփոթեքային ֆինանսավորման տարբերակներ ես փնտրում:</p>
            <ul className="loan-list">
              <li><span className="arrow">→</span> Օնլայն հիփոթեքային վարկ</li>
              <li><span className="arrow">→</span> Հիփոթեքային վարկ առաջնային շուկայից</li>
            </ul>
            <div className="btn-group">
              <button className="btn-green">Դիմիր օնլայն</button>
              <button className="btn-outline">Տես բոլորը</button>
            </div>
          </div>
          <div className="split-image">
            <img src="https://ameriabank.am/Portals/0/Images/loans/home-mortgage.png" alt="Հիփոթեքային" />
          </div>
        </div>
      </section>
    </>
  );
}