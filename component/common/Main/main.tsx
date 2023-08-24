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
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4NDRAODREPDg0NEBAODRAOEA8ODw0NFREXFhUVFRYYHCggGBolHRYVITEhJSkrMS4uFx8zODUvQygtLisBCgoKDg0OFg0NFisZFRkrNzM3LjcuLTcwLTM3Kzc3NzA3LTc3NS0uLSsrLis1OC0tNzcxLi0tMS03LSstLS0tN//AABEIAMIBAwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQcCAwQBBv/EADsQAAIBAgMECAUDAwIHAAAAAAABAgMRBBIhBhMxUQUiNUFhgYOzFlJxktIUFTKRobEj8AclU1RkwdH/xAAbAQEBAQADAQEAAAAAAAAAAAAAAQUDBgcEAv/EACoRAQABAAYLAQADAAAAAAAAAAABAgQFETGBAxUzNEFRUpGx0fAUEiHh/9oADAMBAAIRAxEAPwDWYT0YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfX7NbJ0cVho1686idRyyRpuMUoxk46tp3d0z7dBVqNOh/KlOLBtC1tJoNNOh0VGP653/4lfgXB/PiPvp/gc349Hzl8Ovaz00e0+z4Fwfz4j76f4D8ej5ya9rPTR7T7PgXB/PiPvp/gPx6PnJr2s9NHtPs+BcH8+I++n+A/Ho+cmvaz00e0+z4Fwfz4j76f4D8ej5ya9rPTR7T7PgXB/PiPvp/gPx6PnJr2s9NHtPs+BcH8+I++n+A/Ho+cmvaz00e0+z4Fwfz4j76f4D8ej5ya9rPTR7T7PgXB/PiPvp/gPx6PnJr2s9NHtPs+BcH8+I++n+A/Ho+cmvaz00e0+z4Fwfz4j76f4D8ej5ya9rPTR7T7PgXB/PiPvp/gPx6PnJr2s9NHtPtrr7CYZwlu6leM7PK5yhKObuulFaeZJqVC7+pm9+qFvaeKUfzo0Zo5+1fGa7U9AAAAAAAAAAAAAAAAAAAABaOxfZ1D1Pdma1V2UfcXS7X3ynl4htntFg41HSlVSqRdVSTjPqulKEZp6c5xtzV2uDtzs169osEpTi60E6cc8m81rb2VLTTW04uP1aXeLx0YLpXD15ZaVRSks7taSvGFRwcldarMmk++2hR2AAAAAAAAAAAJKlHx8zCl6NGEBFAAAAAAAAAAAAAAAAAAAAtHYvs6h6nuyNaq7KPuLpdr75Ty8QkKnQ+GqZnPD0JOd87lTg3O8s2t1rrr9TnZpLobDO98PQd04u9ODvFzc2uHDNKUvq2wNtLo6lCe8hSpxqWks0YRUrSd5K65tJgb8jAZHyAZGAyMBkfIBkfIBkYvDI+QDI+QHhUlSb4mFL0aMICKAAAAAAAAAAAAAAAAAAABaOxfZ1D1Pdka1V2UfcXS7X3zSZeITeKrulBSUXPVJqN8yj3tJJ3fgc7NcP74uG4xF25KN4xs1GCle6fB3aTV72IM6nSzjLLKhW1nUhBxSlGSg7OT71fu0KM8L0qqk4wdKtTztpOcY2TSb61m7fxepBIAAAAAAAhNsul6mA6Pq4mlFSqRyRhmTcYuc1HM132uUfM7E7SY6rjVhcXWo4uNanUq050d23SjFrK3kSSjJN9WXWWl0u+D7mXF+Z+oJUm+JhS9FjCAigAAAAAAAAAAAAAAAAAAAWjsX2dQ9T3ZGtVdlH3F0u198p5eIfQRmrHOzXu8QDeIBvEA3iA8lVild/4A1/qPDT66gZxrRa/3oBlvEA3iA1YiFOrCVOrFTpzTjOMlmjKL4ppgcPQ/QeBwLk8LRjSlU/nJZpSa42zSbaXhwA7Zd5UlSbMKXo8YQEAAAAAAAAAAAAAAAAAAAALR2L7Ooep7sjWquyj7i6Xa++U8vEPoIwVjnZr3doBu0A3a5f5AbtAa6tNdX6/3sB5u0Ap01mf0X9dQNu7QDdoDTiqtKjTlVqyjTp01mnOTtGK8WBw9DdO4HH5v0lWNV0/5xtOEkueWSTt4gd0u8sEqTZhS9FjCAigAAAAAAAAAAAAAAAAAAAWjsX2dQ9T3ZmtVdlH3F0u198p5eITeKwsa0IxldWanFq2aMlwafc/E52a4f2GH/WxGrlKSzxtNygoaq3BKKsu4gzqdC03LMp1oNzqVJqE7KpKbv1lbu7gM8N0TGlOM41K7cW21KeZT0atK61tfTlZeIEgB5JXVmBjkfP+2oGUYpf74sD0ABB7Z9D1OkMBUw9GSjVbhOGb+EpQkpZZeDt/gD57YfZrF0MY8XiqNDBxhSnSjSoOLdWc5KUpyyt6XWivpokkkB9rLi/M/UJKk2YUvRowgIoAAAAAAAAAAAAAAAAAAAFo7F9nUPU92ZrVXZR9xdLtffKeXiE8lKxzs17aQC0gFpALSAWkAtIBaQC0gFpALSAWkBrZUlSbMKXo0YQEUAAAAAAAAAAAAAAAAAAAC0di+zqHqe7I1qrso+4ul2vvlPLxCbxNSpGCdKOd3V497j321Vn9TnZrh/ccV/2r1clF527RUE02sq4yclZ2enkBnUxuJjK36fNFzqKLUuEIuybXj9VxIM8Lja8pxjUw7pxldOSnmyWTd31Ve9kvMokCAAAAAAEBtz0pWwXR1Wvh9KqcIqeVS3SlNRc7PR2vpfS7RR81sB05i6mOlhauJWPpSoyrZ1F/6DU0o9ZpPVPWPc2lxTRB95Li/M/UEqTZhS9FjCAigAAAAAAAAAAAAAAAAAAAWjsX2dQ9T3ZmtVdlH3F0u198p5eIT8aisc7Ne71eIuDerxFwb1eIuDerxFwb1eIuDerxFwb1eIuDerxFwb1eIuGFVwnFxnFShJOMoySlGUXxTT4oXDm6O6PwuFUlhqNOgpu891CMMzXC9uIG9lJUmzCl6LGEBFAAAAAAAAAAAAAAAAAAAAtHYvs6h6nuyNaq7KPuLpdr75Ty8QnpVIQUc7jHM1GOZqOab4JX4t8jnZrH9VR169Pq8etHTqqWvk0/o0AWJou6U6bcW4ySlFtSWjT8QMoVqcnaMoSfJSi3z/8AT/oBssuSIFlyRQsuSAWXJALLkgFlyQHH0v0jRwWHniMQ8tKmleyu227KKXe22kBE7MbY4TpOc6dGNSnVgs+StGKc4XSbi4trS6uvECblxfmWElSbMKXo0YQEUAAAAAAAAAAAAAAAAAAAC0di+zqHqe7I1qrso+4ul2vvlPLxCeq0IVYZaizRfFO9mc7Ncn7Jhrp7vVOUv51NZSSUm+tq3ZasDOp0Th5NSlTV1Kc7pyV5zd5N2evnw7iD2j0XQpyjOEMsoNuNpTsm009L273/AG5IDsAAAAAABFbT9Cx6Rwk8M5Om5OMoTSvkqRd07d6/+gQ2y2ymIw2JeLxuIjiKsacqNKNOOWEYylmlN6K8m9W7attttso+mlxfmWElSbMKXo0YQEUAAAAAAAAAAAAAAAAAAAC0di+zqHqe7M1qrso+4ul2vvlPLxCeVN24nOzXu7fMBu3zAbt8wG7fMBu3zAbt8wG7fMBu3zAbt8wG7fMBu3zA1spKk2YUvRYwgIoAAAAAAAAAAAAAAAAAAAFo7F9nUPU92RrVXZR9xdLtffKeXiE3io1XCO5aU00+tbLJcno9Ppqc7NcP/Mf/AB7Ny4KV4xyLLbW182ZvjxAzqRxyl1JUZRlOo7STUoU79RJrjpxugM8L+tzx3u4cG3vMinFpWdnG7ffl0fMCQIAAAAAAfPbfTxMejK7wmfeLJmdK6qKjmWfK1qna+vK4HyH/AAwqTeNnHCzxNXBbmUq7rpKEa7mnCKSbWdK6bv1tXZJICyJcX5n6SVJswpejRhARQAAAAAAAAAAAAAAAAAAALR2L7Ooep7szWquyj7i6Xa++U8vEJ5VNOBzs17vPAXBvPAXBvPAXBvPAXBvPAXBvPABvfAXBvPAXBvfAXBvPADxVLcELhgypKk2YUvRowgIoAAAAAAAAAAAAAAAAAAAFo7F9nUPU92ZrVXZR9xdLtffKeXiE5XxMKMFKbtFtRvbSN+98l4nOzXN+9YbXru8XKLWSonmjFSktVxSkvO64oD2XTGHTcXOzjOVNpxkutF2evAgzw/SdCrJRhO7ldR6s1dpNviuSYHYAAAAAACM2j6Zh0fhZ4mcXPJljCCdnOpJ2ir9y11fJMohtldrqmMryw2Kw0sJWyzqUruTVSMJ5ZrVJpp+Ts+RB9JLi/M/UJKk2YUvRowgIoAAAAAAAAAAAAAAAAAAAFo7F9nUPU92RrVXZR9xdLtffKeXiH0FotJOz4cbPU52a1LCUdP8ATpdXSPUh1Va2mmmmgGcqNN2bjBuOZxvGLs5fyt9e8AqFNNSUYKS4NRjdceD83/VgbLrwAXXgQLrwKF14EC6AXXgBw9N9F0cdhp4avfd1EtYtKUZJ3UovmmiiJ2Z2QodH1ZV97VxFdwVGM60k93RVrRil9EvorK2oE7Li/MsEqTZhS9FjCAigAAAAAAAAAAAAAAAAAAAWjsX2dQ9T3ZGtVdlH3F0u198p5eITR9DNAAAAAAAAAAAAAAlSjMKXosYQEUAAAAAAAAAAAAAAAAAAAC0di+zqHqe7I1qrso+4ul2vvlPLxCaPoZoAAAAAAAAAAAAAJKlGYUvRowgIoAAAAAAAAAAAAAAAAAAAFo7F9nUPU92RrVXZR9xdLtffKeXiE0fQzQAAAAAAAAAAAAASVKMwpejRhARQAAAAAAAAAAAAAAAAAAALR2L7Ooep7szWquyj7i6Xa++U8vEJo+hmgAAAAAAAAAAAAAkqUZhS9HjCAgAAAAAAAAAP/9k=",
      fallbackSrc: "https://via.placeholder.com/150",
      imageAlt: "none Image alt text",
      title: "accordion",
      buttonColorScheme: "facebook",
      href: "/accordion",
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
        ? { color: "#272727", bg: "#ffffff" }
        : { bg: "#272727", color: "#ffffff" },
    _focus: { bg: "#272727", color: "#ffffff" },
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
