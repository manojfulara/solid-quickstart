// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en" class="show-my-ip">
      <Head>
      
<Title>What Is My IP Address - Your Public IPv4 and IPv6 Address</Title>
<Meta name="description" content="Check and display your public IPv4 and IPv6 addresses on this website. my ip v4 " />
<Meta name="keywords" content="IPv4, IP address, geolocation , my ip location,what is my ip,my ip show,what is my ipv4 address ,what is my ip address vpn ,my ip country,what is my ip address wifi,what is my private ip,what is my public ip,what is my ip on my phone?,vpn" />

        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
{/*             <A href="/">Index</A>
            <A href="/about">About</A> */}
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
