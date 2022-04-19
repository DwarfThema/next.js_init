import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  return (
    <div>
      <h4> {router.query.title || "loading"} </h4>
    </div>
  );
};

export default Detail;
