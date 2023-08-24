"use client";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  Grid,
  GridItem,
  Button,
  useToast,
  useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Main() {
  const router = useRouter();

  /**
   * DarkMode / LightMode
   */
  const { colorMode, toggleColorMode } = useColorMode();

  /**
   * toast 관련 variable
   */
  const toast = useToast();
  const imgToastRef = useRef<any>(null);

  const propertys = [
    {
      imageUrl:
        "data:image/jpeg;base64,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",
      fallbackSrc: "https://via.placeholder.com/150",
      imageAlt: "none Image alt text",
      title: "accordion",
      buttonColorScheme: "facebook",
      href: "/accordion",
    },
    {
      imageUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS8AAACmCAMAAAC8yPlOAAAAV1BMVEX////p7/X09/q7u7vq6urPz8/x8fHk5OTt7e3AwMDExMTHx8fW1tbKysqioqIcHBwyMjIpKSl5eXmzs7Pb29uoqKj29vZKSkp/f38XFxciIiKEhIS1tbWtHqegAAACuklEQVR4nO3Za3OaQABGYdMgIqK2UUna+v9/Zy+RlersugeMo805n3lH9mHUXCZPRpo8fbH8/nhNLDe9WHqx9GLpxdKLpRdLL5ZeLL1YerH0YunF0oulF0svll4svVh6sfRi6cXSi6UXSy9Wrtd0NR/eZjEbUTNmTNbVFb12GddEK7Zj1rMxY7LOuTTX6zn/Zc/Ti6UX6xN71atj09wbCV7T3rrOXYdj7HrrAq+vcyn1mjdF13KA1zKsm3nuOhxjNevG1eZxvKrungd5hfUQr4Bd7fWK9j95lctEwTPqVVbx2rNjnHi1iXGJEMCl47zK13Wqt8Mo5tXUiRbdj9sRr3KRWodndVde8/XXVN8PjzniVdaLRHVzeox/vbbp9Zn25T7ea7v+lujH6+E9FfFqF6kj193tR7yK5LhuT9eXu8HnV/32Eu9ndwOx92O5beKFu499fs0S46Y6W1/O78fJHXh132nlIK+wHuQVvv4ex2u337y33w3w6q0HeG269g/z+1BZHGuTi17Bq+2ty+SkVzhGMeS1/fvEh631Ymu92Pp+vKbliJoxY7LOeao38WqnD1HO/3Ru4vUg5ZxRr2N6sfRi6cXSi6UXSy+WXiy9WHqx9GLpxdKLpRdLL5ZeLL1YerH0YunF0oulF0svll4svVh6sfRi6cXSi6UXSy+WXiy9WHqx9GLpxdKLpRdLL5ZeLL1YerH0YunF0oulF0svll4svVh6sfRi6cXSi6UXSy+WXiy9WHqx9GLpxdKLpRdLL5ZeLL1YerH0YunF0oulF0svll4svVh6sfRi6cXSi6UXSy+WXiy9WHqx9GLpxdKLpRdLL5ZeLL1YV/X6DF3Ry97Ti6UXSy+WXiy9WHqx9GLpxdKLpRdLL5ZeLL1YerH0YunF0oulF0svll4svVh6sfRi/fWy/H57GekXNZNIHn5Be0wAAAAASUVORK5CYII=",
      fallbackSrc: "https://via.placeholder.com/150",
      imageAlt: "none Image alt text",
      title: "tabs",
      buttonColorScheme: "facebook",
      href: "/tabs",
    },
    {
      imageUrl:
        "data:image/png;base64,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",
      fallbackSrc: "https://via.placeholder.com/150",
      imageAlt: "none Image alt text",
      title: "alert",
      buttonColorScheme: "facebook",
      href: "/alert",
    },
    {
      imageUrl:
        "https://img.paperform.co/fetch/f_jpg,w_1800/https://s3.amazonaws.com/paperform-blog/2022/10/Embed-Your-Forms-Opt-2-@2x-2.png",
      fallbackSrc: "https://via.placeholder.com/150",
      imageAlt: "none Image alt text",
      title: "form",
      buttonColorScheme: "facebook",
      href: "/form",
    },
  ];
  const propertys2 = [
    {
      imageUrl:
        "data:image/jpeg;base64,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",
      fallbackSrc: "https://via.placeholder.com/150",
      imageAlt: "none Image alt text",
      title: "accordion",
      buttonColorScheme: "facebook",
      href: "/accordion",
    },
  ];
  /**
   * "em"은 상대적인 단위로, 폰트 크기에 따라 달라집니다.
   * "em" 단위는 현재 요소의 폰트 크기에 대한 배수로써 작용합니다. 예를 들어, 만약 부모 요소의 폰트 크기가 16px이라면, 1em은 16px을 의미합니다. 그런데 만약 해당 요소의 폰트 크기가 20px로 변경된다면, 1em은 이제 20px가 됩니다.
   * 이러한 특성 때문에 "em"은 주로 상대적인 스타일링에 사용됩니다. 만약 특정 요소의 폰트 크기를 조정하면 그 요소 안의 모든 "em" 단위 크기도 조정되므로 일관된 상대적인 크기 조절이 가능합니다.
   *
   * 아래 gridBreakpoints의 각 요소에 대한 설명을 예시로 들면 아래와 같습니다.
   * xl: "repeat(4,1fr)"은 xl(80em)너비 이상으로 도달하면, 그 때부터는 repeat(4,1fr) 속성으로 GridItem을 표시하라는 의미입니다.
   */
  const gridBreakpoints = {
    base: "repeat(1,1fr)", // "0em" : 0px
    sm: "repeat(2,1fr)", // "30em": 480px
    md: "repeat(3,1fr)", // "48em": 768px
    lg: "repeat(4,1fr)", // "62em": 992px
    xl: "repeat(5,1fr)", // "80em": 1280px
    "2xl": "repeat(6,1fr)", // "96em": 1536px
  };

  const gridBoxSx = {
    bg: colorMode === "dark" ? "#001369" : "#fffffff",
    color: colorMode === "dark" ? "#ffffff" : "#000000",
    gap: 2,
  };

  // 버튼 스타일 묶음
  const buttonCommonSx = {
    w: "100%",
    mt: "4",
    bg: colorMode === "dark" ? "#000000" : "#fffffff",
    color: colorMode === "dark" ? "#ffffff" : "#000000",
    textAlign: "center",
    fontWeight: "medium",
    transition: "all 0.5s cubic-bezier(.08,.52,.52,1)",
    _hover:
      colorMode === "dark"
        ? { color: "#001369", bg: "#ffffff" }
        : { bg: "#001369", color: "#ffffff" },
    _focus: { bg: "#001369", color: "#ffffff" },
    _active: {
      bg: "#599cff",
      transform: "scale(0.95)",
      borderColor: "#bec3c9",
    },
  };

  // 이미지 스타일 묶음
  const imageCommonSx = {
    filter: "blur(8px)",
    transition: "all 0.5s ease-out",
    _hover: {
      filter: "blur(0)",
    },
  };

  return (
    <Grid templateColumns={{ ...gridBreakpoints }} sx={gridBoxSx}>
      {propertys.map((property, idx) => {
        return (
          <GridItem
            key={idx}
            w="100%"
            h="auto"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            my={8}
          >
            <Box
              boxShadow="md"
              p={6}
              rounded={"md"}
              bg={colorMode === "light" ? "" : "#ffffff"}
            >
              <Image
                src={property.imageUrl}
                alt={property.imageAlt}
                fallbackSrc={property.fallbackSrc}
                boxSize={"150px"}
                borderRadius="full"
                sx={imageCommonSx}
                onMouseEnter={() => {
                  imgToastRef.current = toast({
                    title: `이미지: ${property.title}`,
                    description: `${property.title} Charka Component 에 대한 Grid Item이며, 아래 버튼을 통하여 ${property.title}을 사용한 실습 페이지로 이동할 수 있습니다.`,
                    status: "success",
                    duration: 9000,
                    isClosable: false,
                  });
                }}
                onMouseLeave={() => {
                  if (imgToastRef.current) {
                    toast.close(imgToastRef.current);
                  }
                }}
              />
              <Button
                // w="100%"
                // mt={4}
                // textAlign={"center"}
                // fontWeight={"medium"}
                // transition="all 0.5s cubic-bezier(.08,.52,.52,1)"
                // _hover={{ bg: "#272727", color: "#ffffff" }}
                // _focus={{ bg: "#272727", color: "#ffffff" }}
                // _active={{
                //   bg: "#599cff",
                //   transform: "scale(0.95)",
                //   borderColor: "#bec3c9",
                // }}
                sx={buttonCommonSx}
                variant="outline" // 얘는 왠진 모르지만 sx로 분리가 안되고, 직접 전달해줘야 하는 거 같음
                aria-label={`${property.title} 페이지 이동하기`}
                title={`${property.title} 페이지 이동하기`}
                rightIcon={
                  <ChevronRightIcon
                    boxSize={6}
                    aria-label={`페이지 이동하기 표시용도의 오른쪽 화살표 이미지 아이콘`}
                    role="img"
                  />
                }
                onClick={() => {
                  router.push(property.href);
                  router.refresh();
                }}
              >
                {property.title}
              </Button>
            </Box>
          </GridItem>
        );
      })}

      {/* here */}
      {propertys2.map((property, idx) => {
        return (
          <GridItem
            key={idx}
            w="100%"
            h="auto"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            my={8}
          >
            <Box
              boxShadow="md"
              p={6}
              rounded={"md"}
              bg={colorMode === "light" ? "" : "#ffffff"}
            >
              <Image
                src={property.imageUrl}
                alt={property.imageAlt}
                fallbackSrc={property.fallbackSrc}
                boxSize={"150px"}
                borderRadius="full"
                sx={imageCommonSx}
                onMouseEnter={() => {
                  imgToastRef.current = toast({
                    title: `이미지: ${property.title}`,
                    description: `${property.title} Charka Component 에 대한 Grid Item이며, 아래 버튼을 통하여 ${property.title}을 사용한 실습 페이지로 이동할 수 있습니다.`,
                    status: "success",
                    duration: 9000,
                    isClosable: false,
                  });
                }}
                onMouseLeave={() => {
                  if (imgToastRef.current) {
                    toast.close(imgToastRef.current);
                  }
                }}
              />
              <Button
                // w="100%"
                // mt={4}
                // textAlign={"center"}
                // fontWeight={"medium"}
                // transition="all 0.5s cubic-bezier(.08,.52,.52,1)"
                // _hover={{ bg: "#272727", color: "#ffffff" }}
                // _focus={{ bg: "#272727", color: "#ffffff" }}
                // _active={{
                //   bg: "#599cff",
                //   transform: "scale(0.95)",
                //   borderColor: "#bec3c9",
                // }}
                sx={buttonCommonSx}
                variant="outline" // 얘는 왠진 모르지만 sx로 분리가 안되고, 직접 전달해줘야 하는 거 같음
                aria-label={`${property.title} 페이지 이동하기`}
                title={`${property.title} 페이지 이동하기`}
                rightIcon={
                  <ChevronRightIcon
                    boxSize={6}
                    aria-label={`페이지 이동하기 표시용도의 오른쪽 화살표 이미지 아이콘`}
                    role="img"
                  />
                }
                onClick={() => {
                  router.push(property.href);
                  router.refresh();
                }}
              >
                {property.title}
              </Button>
            </Box>
          </GridItem>
        );
      })}
    </Grid>
  );
}
