import axios from "axios";
import React, { useEffect, useState } from "react";

interface IData {
  content: String;
  createdAt: String;
  title: String;
  updatedAt: String;
  writer: String;
  _id: String;
}

function Practicecs1() {
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");

  const [data, setData] = useState<IData[]>();

  useEffect(() => {
    get();
  }, []);

  const send = () => {
    axios
      .post("/api/practicecs1", { title, writer, content })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const get = () => {
    axios
      .get("/api/practicecs1")
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        onChange={(e) => setWriter(e.target.value)}
        value={writer}
      />
      <textarea onChange={(e) => setContent(e.target.value)} value={content} />
      <div>
        <button onClick={send}>send</button>
      </div>
      <div>
        <button onClick={get}>get</button>
      </div>

      {data && (
        <ul>
          {data.map((el) => (
            <>
              <li>제목 : {el.title}</li>
              <li>작성자 : {el.writer}</li>
              <li>내용 : {el.content}</li>
            </>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Practicecs1;
