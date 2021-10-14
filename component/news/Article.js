import React from "react";
import "../../styles/article.css";
import News from "../../assets/article.png";

function Article() {
  return (
    <div className="article-main">
      <div className="article-heading">
        <h3 className="article-title">Latest news</h3>
      </div>
      <div className="article-grid">
        <div className="article-grid-row-1">
          <div className="article-image-1-1">
            <img src={News} className="article-icon-1-1" alt="Icon"></img>
            <a className="article-link-1-1" href="/w">
              Name of the article
            </a>
          </div>
          <div className="article-image-1-2">
            <img src={News} className="article-icon-1-2" alt="Icon"></img>
            <a className="article-link-1-2" href="/w">
              Name of the article
            </a>
          </div>
          <div className="article-image-1-3">
            <img src={News} className="article-icon-1-3" alt="Icon"></img>
            <a className="article-link-1-3" href="/w">
              Name of the article
            </a>
          </div>
        </div>
        <div className="article-grid-row-2">
          <div className="article-image-2-1">
            <img src={News} className="article-icon-2-1" alt="Icon"></img>
            <a className="article-link-2-1" href="/w">
              Name of the article
            </a>
          </div>
          <div className="article-image-2-2">
            <img src={News} className="article-icon-2-2" alt="Icon"></img>
            <a className="article-link-2-2" href="/w">
              Name of the article
            </a>
          </div>
          <div className="article-image-2-3">
            <img src={News} className="article-icon-2-3" alt="Icon"></img>
            <a className="article-link-2-3" href="/w">
              Name of the article
            </a>
          </div>
        </div>
        <div className="article-grid-row-3">
          <div className="article-image-3-1">
            <img src={News} className="article-icon-3-1" alt="Icon"></img>
            <a className="article-link-3-1" href="/w">
              Name of the article
            </a>
          </div>
          <div className="article-image-3-2">
            <img src={News} className="article-icon-3-2" alt="Icon"></img>
            <a className="article-link-3-2" href="/w">
              Name of the article
            </a>
          </div>
          <div className="article-image-3-3">
            <img src={News} className="article-icon-3-3" alt="Icon"></img>
            <a className="article-link-3-3" href="/w">
              Name of the article
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
