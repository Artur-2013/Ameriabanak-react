export default function LoanCardsGrid() {
  return (
    <section className="featured-cards-section">
      <div className="container cards-grid">
        <div className="loan-card">
          <div className="card-image-box">
            <img
              src="https://ameriabank.am/Portals/0/Images/loans/online-loans.png"
              alt="Օնլայն վարկեր"
            />
          </div>
          <div className="card-body">
            <span className="hashtag">#Onlineloans</span>
            <h3>Օնլայն վարկեր</h3>
            <p>100,000 ՀՀ դրամից մինչև 20 մլն ՀՀ դրամ վարկեր՝ մի քանի րոպեի ընթացքում։</p>
            <button className="btn-green btn-full">Դիմիր օնլայն</button>
          </div>
        </div>

        <div className="loan-card">
          <div className="card-image-box">
            <img
              src="https://ameriabank.am/Portals/0/Images/loans/online-carloan.png"
              alt="Ավտովարկավորում"
            />
          </div>
          <div className="card-body">
            <span className="hashtag">#Automarket</span>
            <h3>Ավտովարկավորում առաջնային շուկայից</h3>
            <p>
              Ընտրիր քո ավտոմեքենան, իմացիր՝ որքան գումարի վարկ կարող ես ստանալ, և ստացիր պատասխանն 5 րոպեում։
            </p>
            <button className="btn-green btn-full">Դիմիր օնլայն</button>
          </div>
        </div>
      </div>
    </section>
  );
} 