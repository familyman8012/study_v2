import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Detail() {
  const router = useRouter();
  const { _id } = router.query;

  console.log("_id", _id);

  const [data, setData] = useState<any>();

  const get = () => {
    axios
      .get(`/api/simpleboard/${_id}`)
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    _id && get();
  }, [_id]);

  return (
    <>
      {_id && data && (
        <>
          <div>{_id}</div>
          <div>{data?.content}</div>
        </>
      )}
      {_id}
    </>
  );
}

export default Detail;
