import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import './orderpage.css';


function OrderPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const order = location.state;
    const { title, price, description } = order || {};

    const [orderNum, setOrderNum] = useState(1);
    const [formValid, setFormValid] = useState(false);

    const [form, setForm] = useState({
        name: "",
        size: "",
        dough: "",
        malzeme: [],
        notes: "",
        quantity: 1
    });

    // Adet artış / azalış
    function handleClick(action) {
        if (action === 'increase') {
            const newQty = orderNum + 1;
            setOrderNum(newQty);
        } else if (action === 'decrease' && orderNum > 1) {
            const newQty = orderNum - 1;
            setOrderNum(newQty);
        }
    }

    // Sipariş adeti değiştikçe form'a da yansıt
    useEffect(() => {
        setForm(prev => ({ ...prev, quantity: orderNum }));
    }, [orderNum]);

    // Form doğrulama
    useEffect(() => {
        const isValid =
            form.name.length >= 3 &&
            form.size &&
            form.dough &&
            form.malzeme.length >= 4 &&
            form.malzeme.length <= 10;

        console.log("Form doğrulama sonucu:", {
            name: form.name.length >= 3,
            size: !!form.size,
            dough: !!form.dough,
            malzemeCount: form.malzeme.length,
            isValid
        });
        setFormValid(isValid);
    }, [form]);

    // Girdi değişimi
    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox' && name === "malzeme") {
            const newMalzeme = checked
                ? [...form.malzeme, value]
                : form.malzeme.filter((item) => item !== value);

            setForm({ ...form, malzeme: newMalzeme });
        } else {
            setForm({ ...form, [name]: value });
        }
    }

    // Form gönderme
    function handleSubmit(e) {
        e.preventDefault();

        console.log("Gönderilen form:", form);


        axios
            .post("https://reqres.in/api/pizza", form, {
                headers: {
                    'x-api-key': 'reqres-free-v1'
                }
            })
            .then((res) => {
                console.log("Sunucu yanıtı:", res.data);
                navigate("/success", { state: res.data });
            })
            .catch((err) => {
                console.error("Hata oluştu:", err);
            });
    }

    // Sipariş verisi alınmamışsa hata göster
    if (!order) {
        return <div style={{ padding: "2rem", color: "red" }}>HATA: Sipariş verisi alınamadı.</div>;
    }

    const numericPrice = Number(String(price).replace(/[^\d.]/g, ""));
    const numericOrderNum = orderNum;
    const totalPrice = numericPrice * numericOrderNum;
    console.log("Sipariş toplamı:", totalPrice);

    return (
        <>
            <header className="main-header2">
                <div className="header-content2">
                    <h1 className="logo2">Teknolojik Yemekler</h1>
                    <nav className="nav-links2">
                        <Link to="/" className="nav-link2">Anasayfa-</Link>
                        <Link to="/orderpage" className="nav-link2">Sipariş Oluştur</Link>
                    </nav>
                </div>
            </header>

            <div className="form-container2">


                <form onSubmit={handleSubmit}>
                    {/* Boyut Seçimi */}
                    <h2>{title}</h2>
                    <div>
                        <h2>{price}</h2>
                        <span>4.9</span>
                        <span>(200)</span>
                    </div>
                    <p>{description}</p>
                    <div id="middle-of-form">
                        <div id="order-size">
                            <label className="label-heading">Boyut Seç</label>
                            {["Küçük", "Orta", "Büyük"].map((boyut) => (
                                <label key={boyut}>
                                    <input
                                        type="radio"
                                        name="size"
                                        value={boyut}
                                        onChange={handleChange}
                                        checked={form.size === boyut}
                                    />{" "}
                                    {boyut}
                                </label>
                            ))}
                        </div>

                        <div id="dough-thickness">
                            <label className="label-heading">Hamur Seç</label>
                            <select name="dough" value={form.dough} onChange={handleChange}>
                                <option value="">Seçiniz</option>
                                <option value="İnce">İnce</option>
                                <option value="Orta">Orta</option>
                                <option value="Kalın">Kalın</option>
                            </select>
                        </div>
                    </div>


                    {/* Ek Malzemeler */}
                    <div id='extra-ingredients'>
                        <h2>Ek Malzemeler</h2>
                        <span>En fazla 10 malzeme seçebilirsiniz</span>
                        <div>
                            {[
                                "Peperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas",
                                "Sosis", "Soğan", "Sucuk", "Biber", "Kabak",
                                "Kanada Jambonu", "Domates", "Jalepeno"
                            ].map((item, index) => (
                                <label key={index}>
                                    <input
                                        type="checkbox"
                                        name="malzeme"
                                        value={item}
                                        onChange={handleChange}
                                        checked={form.malzeme.includes(item)}
                                    />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2>İsim</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder="Adınızı giriniz"
                            value={form.name}
                            onChange={handleChange}
                        />
                        {form.name.length > 0 && form.name.length < 3 && (
                            <p style={{ color: 'red' }}>İsim en az 3 karakter olmalı</p>
                        )}
                    </div>
                    {/* Sipariş Notu */}
                    <div id='order-notes'>
                        <h2>Sipariş Notu</h2>
                        <textarea
                            name="notes"
                            placeholder="Siparişine eklemek istediğin bir not var mı?"
                            value={form.notes}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Adet ve Sipariş Ver */}
                    <div id='order-quantity'>
                        <div>
                            <button type="button" onClick={() => handleClick('increase')}>+</button>
                            <span>{orderNum}</span>
                            <button type="button" onClick={() => handleClick('decrease')}>-</button>
                        </div>
                        <div>
                            <h3>Sipariş Toplamı</h3>
                            <div className="secimler">
                                <span>Seçimler</span>
                                <span>{price}</span>
                            </div>
                            <div className="toplam">
                                <span>Toplam</span>
                                <span data-testid="total-price">{orderNum * numericPrice}</span>
                            </div>
                            <button type="submit" disabled={!formValid}>
                                SİPARİŞ VER
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default OrderPage;
