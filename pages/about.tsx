import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import {LightLayout} from "../components/layouts/LightLayout";
import { MainLayout } from "../components/layouts/MainLayout";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
    
        <h1>About Page</h1>
        <h1 className={"title"}>
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={"description"}>
          Get started by editing <code className={"code"}>pages/about.js</code>
        </p>
     
    </>
  );
}

AboutPage.getLayout = function getLayout(page: any) {
  return (
    <MainLayout>
      <LightLayout>{page}</LightLayout>
    </MainLayout>
  );
};
