import { Box, Flex } from "@chakra-ui/layout";
import Header from "./Header";
import Navbar from "./Navbar";
import React from "react";
import Footer from "./footer";
import { Heading } from "@chakra-ui/layout";
import AlertServerError from "./AlertServerError";
import Head from "next/head";

function Layout(props) {
  return (
    <>
      <Head>
        <title>{`La casa lo primero - ${props.title}`}</title>
      </Head>

      <Flex minHeight="100vh" width="full" justifyContent="center">
        <Box width="full" maxWidth="1140px" px={3}>
          <Header {...props} />
          <Navbar {...props} />
          <Box pt="30px">
            {props.subTitle ? (
              <Box pb="15px">
                <Heading as="h3" fontSize="28px" fontWeight="700" color="green.400" mb="15px" textAlign="center">
                  {props.subTitle}
                </Heading>
                <hr />
              </Box>
            ) : null}
            {props.error ? <AlertServerError /> : props.children}
          </Box>
          <Footer />
        </Box>
      </Flex>
    </>
  );
}

export default Layout;
