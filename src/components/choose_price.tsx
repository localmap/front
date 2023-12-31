import "../assets/styles/css/component/choose_price.scss";
import { useState } from "react";
const Choose_price: React.FC = () => {
  const [price1, setPrice1] = useState(false);
  const [price2, setPrice2] = useState(false);
  const [price3, setPrice3] = useState(false);
  const [price4, setPrice4] = useState(false);
  return (
    <div className="price">
      <p>가격 1인당</p>
      <section className="price_check">
        <div className="price1_button">
          <button
            onClick={() => setPrice1(!price1)}
            style={{
              backgroundImage: price1
                ? `url('https://cdn-icons-png.flaticon.com/128/10692/10692995.png')`
                : `url('https://cdn-icons-png.flaticon.com/128/10693/10693555.png')`,
            }}
          ></button>
        </div>
        <div className="price2_button">
          <button
            onClick={() => setPrice2(!price2)}
            style={{
              backgroundImage: price2
                ? `url('https://cdn-icons-png.flaticon.com/128/3344/3344853.png')`
                : `url('https://cdn-icons-png.flaticon.com/128/3344/3344807.png')`,
            }}
          ></button>
        </div>
        <div className="price3_button">
          <button
            onClick={() => setPrice3(!price3)}
            style={{
              backgroundImage: price3
                ? `url('https://cdn-icons-png.flaticon.com/128/10783/10783228.png')`
                : `url('https://cdn-icons-png.flaticon.com/128/10809/10809774.png')`,
            }}
          ></button>
        </div>
        <div className="price4_button">
          <button
            onClick={() => setPrice4(!price4)}
            style={{
              backgroundImage: price4
                ? `url('https://cdn-icons-png.flaticon.com/128/3135/3135706.png')`
                : `url('https://cdn-icons-png.flaticon.com/128/3135/3135673.png')`,
            }}
          ></button>
        </div>
      </section>
      <section className="price_list">
        <div className="price_list1">만원미만</div>
        <div className="price_list2">일만원대</div>
        <div className="price_list3">이만원대</div>
        <div className="price_list4">삼만원이상</div>
      </section>
    </div>
  );
};

export default Choose_price;
