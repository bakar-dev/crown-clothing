import React from "react";
import "./collection-preview.styles.scss";

export default function collectionPreview({ title, items }) {
  return (
    <div>
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <div key={item.id}>{item.name}</div>
          ))}
      </div>
    </div>
  );
}
