import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IData {
  content: String;
  createdAt: String;
  title: String;
  updatedAt: String;
  writer: String;
  _id: String;
}

function Index() {
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");

  const [data, setData] = useState<IData[]>();

  useEffect(() => {
    get();
  }, []);

  const send = () => {
    axios
      .post("/api/simpleboard", { title, writer, content })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const get = () => {
    axios
      .get("/api/simpleboard")
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
            <li style={{ padding: "10px", borderBottom: "1px solid" }}>
              <Link href={`/simpleboard/${el._id}`}>
                <a>
                  <span style={{ marginRight: "10px" }}>제목 : {el.title}</span>
                  <span>작성자 : {el.writer}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Index;
