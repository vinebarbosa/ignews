import { GetServerSideProps } from "next";
import { stripe } from "../services/stripe";

import Head from "next/head";
import Image from "next/image";

import { SubscriberButton } from "../components/SubscriberButton";

import styles from "../styles/home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    price: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home - ig.news</title>
      </Head>
      <main className={styles["content-conteiner"]}>
        <section className={styles.content}>
          <span>👏 Hi, welcome!</span>
          <h1>
            News about the <span>React</span> world
          </h1>
          <p>
            Get acess to all the publications
            <br />
            <strong>for ${product.price}/month</strong>
          </p>
          <SubscriberButton />
        </section>
        <Image
          height={521}
          width={336}
          src="/images/avatar.svg"
          alt="girl coding"
        />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1Kt86DB9Y1hCSAVJKrWi2fzi", {
    expand: ["product"],
  });

  const product = {
    priceId: price.id,
    price: price.unit_amount / 100,
  };

  return {
    props: {
      product,
    },
  };
};
