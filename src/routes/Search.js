import React, { Component } from "react";
import TopMenu from "../Component/TopMenu";
import Footer from "../Component/Footer";
import mask from "../Component/image/five.jpg";
import coronaImg from "../Component/image/corona.jpg";
import account from "../Component/image/가계부.png";
import "./Search.css";

class Search extends Component {
  render() {
    const searchMenu = [
      "코로나19",
      "뉴스",
      "검색",
      "영화",
      "FUN",
      "연예",
      "인기웹",
      "스포츠",
      "뮤직",
      "공연"
    ];
    const menus = searchMenu.map(menu => (
      <li className="menuList" key={menu.toString()}>
        {menu}
      </li>
    ));
    return (
      <div>
        <TopMenu />
        <TopMenu name="뉴스" />
        <div className="main">
          <div className="longMenu">
            <ul className="menuUl">{menus}</ul>
          </div>
          <div className="corona">
            <div className="centerH3">
              <h3>"얼굴 붉힐 일 없어졌다"..마스크 5부제 첫날 '차분'</h3>
              <ul className="coronaUl">
                <li className="coronaList">
                  뉴스특보<i className="fas fa-chevron-right"></i>
                </li>
                <li className="coronaList">
                  마스크 5부제<i className="fas fa-chevron-right"></i>
                </li>
                <li className="coronaList">
                  시도별 현황<i className="fas fa-chevron-right"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="corona centerT">
            <h3 className="centerH3">
              <i class="fas fa-globe-asia"></i>&nbsp;&nbsp;
              <b>[긴급 모집]</b> 코로나19, 함께 이겨내요.
            </h3>
          </div>
          <ul className="newsUl">
            <li className="newsList">
              정부 "치료기회 보장과 이료기관 보호 모두 중요.."
            </li>
            <li className="newsList">
              '마스크 대구까지 수송하라' 긴급작전.. 軍 전담팀 투입
            </li>
            <li className="newsList">
              이탈리아처럼 될라.. 코라나 19에 유럽 경제, 결속력 위기
            </li>
            <li className="newsList">모든 세상이 행복했으면!!</li>
            <li className="newsList">
              '유가 패닉'에 아시아 증시 추락..일본 증시 5%대
            </li>
          </ul>
          <ul className="bigNewUl">
            <ll className="bigNewList">
              <div className="imageBox">
                <img src={mask} alt="mask" />
              </div>
              <div className="textBox">
                마스크 5부제 첫날..긴줄 없어지고 "언제오나" 눈치싸움
              </div>
            </ll>
            <ll className="bigNewList">
              <div className="imageBox">
                <img src={coronaImg} alt="corona" />
              </div>
              <div className="textBox">
                [LIVE] '코로나19' 중앙방역대책본부 브리핑
              </div>
            </ll>
          </ul>
          <div className="ad">
            <img src={account} alt="account" />
            <span className="adIcon">AD</span>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Search;
