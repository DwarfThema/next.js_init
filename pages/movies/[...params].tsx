import { useRouter } from "next/router";
import Seo from "../../components/Seo";

const Detail = ({ params }: any) => {
  const router = useRouter();
  const [title, id]: any = params || [];

  return (
    <div>
      <Seo title={title} />
      <h4> {title || "loading"} </h4>
    </div>
  );
};

export default Detail;

export async function getServerSideProps({ params: { params } }: any) {
  console.log(params);
  return {
    props: { params },
  };
}
