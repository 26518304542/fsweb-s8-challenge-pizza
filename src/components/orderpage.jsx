import { useLocation } from "react-router-dom";


function OrderPage() {
      const location = useLocation();
  const order = location.state;

    if (!order) {
    return <div style={{ padding: "2rem", color: "red" }}>HATA: Sipariş verisi alınamadı.</div>;
  }


    return (<>
        <header>

        </header>
        <div className="form-container">
            <h2>{order.title}</h2>
            <div>
                <h2>{order.price}</h2>
                <span>4.9</span>
                <span>(200)</span>
            </div>
            <p>{order.description}</p>
            <form>
                <formGroup>
                        <div id='order-size'>
                            <h2>Boyut Seç</h2>
                            <label><input type="radio" name="boyut" value="Küçük" /> Küçük</label>
                            <label><input type="radio" name="boyut" value="Orta" /> Orta</label>
                            <label><input type="radio" name="boyut" value="Büyük" /> Büyük</label>
                        </div>
                        <div id='dough-thickness'>
                            <label>Hamur Seç</label>
                            <select id='dough'>
                                <option value="İnce">İnce</option>
                                <option value="Orta">Orta</option>
                                <option value="Kalın">Kalın</option>
                            </select>
                        </div>
                </formGroup>
                <div>
                    <h2>Ek Malzemeler</h2>
                    <span>En fazla 10 malzeme seçebilirsiniz</span>
                </div>
                <formGroup>
                    <div>
                        {["Peperoni", "Tavuk Izgara", "Mısır",
                        "Sarımsak", "Ananas", "Sosis", "Soğan", "Sucuk", "Biber", "Kabak",
                        "Kanada Jambonu", "Domates", "Jalepeno"].map((item, index)=>{
                            return (
                            <label key={index}>
                                <input type="checkbox" name="malzeme" value={item} />
                                {item}
                            </label>)
                        })
                        }
                    </div>
                </formGroup>
                <div>
                    <h2>Sipariş Notu</h2>
                    <textarea name='siparis-notu' placeholder="Siparişine eklemek istediğin bir not var mı?"></textarea>
                </div>
                <footer>
                    <div>
                        <input>-</input>
                        <input></input>
                        <input>+</input>
                    </div>
                    <div></div>
                </footer>
            </form>

        </div>
    </>
    );
}

export default OrderPage;