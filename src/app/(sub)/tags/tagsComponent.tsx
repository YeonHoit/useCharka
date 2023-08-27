"use client";

import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  CloseButton,
  HStack,
  Stack,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  forwardRef,
  useColorMode,
  useMultiStyleConfig,
  useTab,
} from "@chakra-ui/react";

export default function TagsComponent() {
  /**
   * DarkMode / LightMode
   */
  const { colorMode, toggleColorMode } = useColorMode();

  const closeButtonFocusSx = {
    _focus: {
      color: "#000000",
      border: "2px solid #000000",
    },
  };

  // VStack: used to stack elements in the vertical direction
  // HStack: used to stack elements in the horizontal direction
  // Stack: used to stack elements in the vertical or horizontal direction
  return (
    <Box p={6}>
      <Box mb={8}>
        <Stack spacing={4} direction={"row"}>
          {["sm", "md", "lg"].map((size) => (
            <Tag size={size} key={size} variant="subtle" colorScheme="cyan">
              <TagLeftIcon
                boxSize="12px"
                as={AddIcon}
                role="img"
                aria-label="태그 더하기 아이콘"
              />
              <TagLabel>Cyan-{`${size}`}</TagLabel>

              {/* 태그 버튼은 <TagCloseButton/>으로만 작성하면 웹 접근성을 만족하지 않으므로, children으로 웹 접근성을 만족하는 Icon을 보내줘야 함  */}
              <TagCloseButton
                sx={closeButtonFocusSx}
                onClick={() => {
                  alert("발생: closebtn click event");
                }}
              >
                <CloseIcon role="img" boxSize={3} />
              </TagCloseButton>
            </Tag>
          ))}
        </Stack>
      </Box>
      <Box>
        <Stack spacing={4} direction={"row"}>
          {["sm", "md", "lg"].map((size) => (
            <Tag size={size} colorScheme="red" borderRadius="full">
              <Avatar
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUYGRgZGBgaGBgZGRkcGBgaGBgZGhgZHBocIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQsJSs0NDQ1NDQ0NDQ0NDQ0NDQ0NDQ0NDQ1NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAREAuAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xAA/EAACAQIEAwUFBgQFBAMAAAABAgADEQQSITEFQVEiYXGBkQYTMkKhFFKxwdHwYnKi4QcjM7LxFYKSwhYk0v/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACURAAICAgICAwACAwAAAAAAAAABAhESIQMxE0EiUXEEYTKx8f/aAAwDAQACEQMRAD8A8dhCBEYgnZJpCjl7WfNkbbLb3mbs765Mu/O+0cZcN2rGr8PZ0TVrPo3QXyG4vsw5ghAQoSTQFKwz5wbnNkynS65bA87Z+fSFqWZNWylVz7Zg1u1l02v46QAizsl2w/a1q/wfB95vi/7cm3PNytOsuHB0NQj3g+6Cadhrt8d7920dAQ5yTqf2ey5jVvY5rZdGutrXG1s/9PeI3hxRy9svmzC4XLbL2b2v83xf099kBFhJNA0rVM4e+X/KysoGbMPjupuMuY6W1AHPSwxK4D/NyHEn4fcFhT6HP7zT+W2XvjApoS6rLgM4yNiil1vmFINY1e0Ba4uKZsDzYXsAcoSq4G+rYkjPT+WmCaeVfe63NnzFyu4sgBuWuoBTwlrRGCyoXOIDZznVfdkBO3YKSBdv9PU/xaDSNKuGz1rtVyBW+z/DmLX7AqaWAtvaICvhJmGWh2c7VN2z5Qui5eyVudSGAJB3B5WuW6vu+zlzH7wJUdNFNtPm68u8RgMQlmThMzWFfJmrZRmQNlCL9nJOW1y+fMLaAi17G7uXAa3bEn/KFiFpj/NAbMbX/wBMnLbXMLm97aoCnhLCuML7tshre8zDLmyZcuVM17a3ze88su+tq+ABCchAAixrEsLRSykhiWP4wyx2lTuZIbCEHx/Ylx45PZLkkRRTnCkm0sObgESU/DTvL8TJfIk9lQUM6iS1PDTaM1cGV2h4mHkTIL09IgpJeXkYzUWRKNDjKxiEVaS24a4RXIsGFx1sdj6ayFFvoptIhQj64Zr2sbx1cEekahJibRDhJrYa0benaDi0FojQjjJEFZNFHIQhAQTs5CIAhCEAHyl4kJYjxEsMPh7xeMweVcx+H9OU6nw/HIjLZHwxFz6+XP6S0CZ1A5jQ+Ajf/Qq1Nu0twERza9sr3H0IIMfAKqFG5AvNuFOtoibT6NLwzhtIUs75SxGx/CVmIZc2VdidB4nYSorF7WDW85BfEuNCbym4xdsy8bl7NJRfewzDUnuHXT96yPikA1G370lNR4iQdRz8PTpLI49X0LC50zWsvidPrbnrHnFozfFKMr9ECtRDC4I321vp1/fKRsTT52A12F9PXWSqpCm413vbbyncQ+YM2mpGgFr37hpMnFM2i2mhPAuFnEYmnQGzN2u5VBZj/wCIaer8U4NTdcmXQWtbQKU28BoO6Zf/AAmwmbFVH+5QIH8zugH0Des9PxWGFif34SVSZUnZ5liuEol8q25Hy8ZS4umF2Am54theYFgPw0mVx2G3J/ffLfRKZnaxldVOsscYtrysaYM1Qhoy0eYRlplI0QmEISRhCE7EI5CEIAa3h+FzECaut7MGrhnABuFzCw103sOZtfTwlTwFO0PET1/gNIZRPW5XjGjkbblooPZQLXyLVQZmwxR9QVchviWx2I116meX8Zpe5rVF6OyjwBIE9uRaaVyaaItz2iqhS197231M829s+HZqrvl3a/6zCFu6+gyS7PP62JBOuby/vEijmRnCPkTKGfdVLfCCeRM0uH4dSqCyizWGl+Y37zpY+vnAxfsvWLEpqugOhHh47fSc0+bFtSOlJVaM6e43i6bW8Dv68jymi4v7I1KND3z3A0tfneZ7CkXsRffnz5GLi5FN/EJLRMRlKlbGxLECwut7ZTnGraCxBAG9tTeOmiQjDQj71jy1FunSSsDhwSABckgDe972sJYuexk0HIjKBcDkSACdQN52R43Rxz5KlSNZ/hFhcqV6hHxGmg/7Q7H/AHrPQMQoI0t/xPPfZX2nw2HoLQe6sXZma2hLGw7/AIQs0w40jDsurKRupBmbi7NFJMZ4nTv4jw/dpluLoig+eg8NJccVxwClybD0mB4x7QJc5QSevKO0lsEreiJjUzXtKx8LbeNPxF2OnoBEOj7sD5zFyT6NUmuxNVbSK5jj3jTTKTNEchCEkoIQhAQQhCAG/wCEPY3756t7OY4e6dydEWePYKrYzc4SqwwDlb9t7X7hb9Z6/NHKKONvF2WeA4yGrppoXXc9WEsfbjBLlzgfFv4zznDOyurXtlIO/wBZ6Z7Y4sHCrVHPKynf4heYTjjyRolfKDR4nj6bI5KmxvvyPOP0fabFIAA+3UK3qXUn6yzqMr2I0cHQ7HUen/Mrn4cmoJOh0sRa+g9LX27pfJwKXaT/AEcOalTK7jXHMTibCrVZgNlsoA8AoEqqSWIt+/WaKthEUdnkNCQLnX6nX0Er6+GIJvoRpMPAodKvw2XLkSsCQCb7EDxGouRrvy8zLerkykJ3i5BzOMxIa2oW1lFgfXWU+HNgtulpYUqmlrjQ9NdQL+I0tYn8TOqPRx8q+ViMO+FAc4imznTIFLZuYK3UjulViahSoGpI1O4VlUuzMyvqCTYi1v2ZYUUL1lGhZnHIWu5HICw32E3XEfZK7AsM4QELdRot7i5HLyMwmt3Z0QlQ3wzEe+4aazr2irjbcozD0uJ5Ljn7bac57XxsJhsAtJVsMhv/ADNqx/qM8UxQu5PUmYcm0aQ7YqjQLAHUdbAk28ue+/QyVxGmFI927OpUXLXzqRfMLG2h0N+7xvI4PhySOh+kvK3DVI1uDbkF2t3fvWJR0U5UzElGiHQzQYrCKl/HzlNX3kyjRUXZFInItoiZs0CEIRAEIQgBpqFWb/DV1Xh1O5N2ZzYdxI/KeYUqtptKRL4SlroM/wDuM9WMs1Rx8qqivxOMINwLTe8IxJxXDXpnV0LKt+ts6fiR/wBs84xJ6zTf4e4wF6lBmIFVNCDqGTUEd9ix8pE/9Ao6MbUxLKxU8jrfcW5eMm4fFje++l9/SO+1uAZKzqws41Nho4Ozr3HpyNxM/TcrFm0wxTXRoXdbd+999bjQ/X1kDE1Ba2UDe51ub9fCNU8VpaNVXO+4v5eGkcp2gjCmdpObDxllh6pDMy3UWIAGvxaZSTytfXuldgHuCO+TwmscVatC5K6JPs46/bsOG296l+l84t+U9uxfwHTcEDxOgnz3UdkqBwbMGDA9CDcG3LUT3rhvE0q0KVbQBlue5suo8jm9JhyXZrCKaMZ/iW4CKl+V/D9J5DWbWel/4kcSR3CIbgC5PW882qJ0I8jM5dGkUXPBn0BB15zS1X7ANtbfs90xvs+7e+CD5r/TX8prK1QWNz5c9o47VkS06M7xSreUtRpYcRe5MrGmcmaRGmnIpomZFhCEIAdEJ0QjGSkaa3AYr/6qgH4Xcb9bGY8GX3Be3SqLfVSreR0P5Ts4J/Kmc/LHV/2JxDznDse1GolRd0YMO+248xcecK1O0guY5y2CWj1rjeCTiGHWrSI94oJRv9yN3H6aTzV8Pe4y2YEhlO6sNxLL2N9oTh3KObo+/wDCeolx7WUUFZcQlsriz22J5NCHdejKTcf0xjYYruI/TwjtrY2t05TWJhabjlyIP1llhaC5coAPiBNPGkzB/wAhtdHn70ShuuvXvjlPHDnpNDxzhpXUDXmLG/72mVxmGNr2sZMnKP8AibQlGa+QnHYpSdJ6X/hTjlrUquGfUCzgXOx0axGosQpv/FPJRRM1PsBxE0MSp+8rp6rdf6gswcpSezeklone1nAUGJemtRyg1DPlbU37PZAuuhtKVsAlO2RVa4Nnb8htf9Jt+LYnBu7I7ur6du2i9q+VranQ2vMtj8ThgFVXY5QFLZLKxG7DmASZdIXyIfC0WkS4Pb6936SVisWGBI3lNicUORFu6MHEE7fsRZJKkDjbsRinuTIbR1zrGmmEjSI20TFkREgsIQhEACEBCMCQJa8Aq2qZTs6lPM/D9QJUiO0nKkMNwQR4iaQljKyJK1Rc4u4OundK9xeXGLGe1Tk4uLdfmHreQalO203kTEjYYdoef1UiW6YpymUklbW8Dy8pVKtjeTMO/I7HQw45UTyRskYbFugsp8JYcOxWLBzrSzgm2jL32vc6ecrfd+kn4Hib0iCvL92I5iatN+zFxX1ZH4zxTGFu2j0h0C/+3PylBUxbc2cnvJmwxXGVe5Nttv0lFiXVjcgTKUX9lxcV0im96TzMXQxDIwdT2lII8Qbj8JOqZQNAJCbeZNNezZNP0emjA4TEOmIdRkqIGAJPxbMD3g6eUp+K8NwKHsEE9CDfmCO6RPY3iNj9nf4GJZCfla3aGvIjXyljj+Egt2bWv5X6fhN0slZnk4ujJYnBpfQX8rRpMMBrtNJVwCrKbiAtoDIcPY1KyqxIF9JGIj9SNmYyRrEaIiSItoiZso5actF2iTADohAQgMcEcWIWOoI49ksn4bHOqZBa17i/K+9o8jE7yJTSWOHSbxbYqOGhOBNZYthyBY8o2acrGhCKe1osIDALFBZpGRk4iHwSncRFThyAaSSKlohnjeP0RUvsrKmCXX6Rr3AEsnMjuszkl6NY37G8JUyOr7WYenP6XmqrYzmDz3FuffzmTZY/SxDAW5RxlQSjZZ4zE95lHiWJ1kl615HdSY5OxJFc4jRk96UjVEmMolxZFKwCRy0JlRdiMsQyx+0SYNAmM5Z2OmEVBY2jyXRF5Cj+FvmFusUZUwLail9/7y4wTojKwQtYi+drjyAAse83kGjTk+jRvznQmgpl5icGrKKiG6N6qfunvle2DMlcMrsjZQQwI7SXvp1ty33mgXCo4zJqDy5juMfkT0y1x30ZM4UxLYealuHE8pEqcPPSNNESg0Z1qUQaUvqmB7pGqYXujyTFhRTmjGmoy1egY01AwCiqajGjSls1CRct3K6bbDfvJ+nrIboMbIZSN1GA8eksjh5TY85XYc7/AIgSZSoMRurUkR3hniVFyfAn0EylOxqI2zzgaOpaxvGZNlUdzQZdLxudJ5R2I7eEAhhFYHVEnYGldr8h+Mr7zScDo9gEre5Op26flIcsdlxjk6H8OAehkhcGzFctiob4QSum5ub35cpLThqsQSbd1jbptfSWaYewATKLW+Ln36DeN8ya6KXE12R8Hg3UaXBJ2CgW8SND4y2wuLdG1+vPxmH47xlzUK03ZUTs3RiMxHxNpa+ug7h3yRgfayuoAfK46stn82H5iS+R1tFrFaVnqmBxSuNrHp+kkPhQeUx2A9olcLkdVY6ZDo1+muh8pf4bitQHtrcd+/rFFyf/AE1SXofr8KvqJWVuHMPlmqw+MpuOh7/1nalPoNPWWpyj7Fin2jHf9OPSIfhvdNkMPpewkavRQEAlQWNgCQLnkB1MpcsvYnCJiOI4VETMxtc5R1JIJ08gZUYfDEsO/VuZHZNh47X77+cn28xX+b7lT8Ci/wDM1mt6ZPUyx9ksK1YFrdlFtc6BmY30HcF/qMh8lzVvRnj6REGC6TI+0uHKVSD8yq34j/1nq1ThjDcSi9peA+8pHKLuvaUDc9V8/wAQJrKSktMMGkeWGOYZCWt/C/8AtMk1MC6jMyFVsdSCL62587xOAezjpr+BmVmbIJE40UxibRgFFLso6sB9ZZPwzXew8Ixw/D53HRe0fAEfmRLurNIJNbM5MzlamV0IhLeql952GIrKESfgeI1EIsxyg/DfQjmO6QVEUJk9msW10bvA4qm6587ADe4+HS5ub/WZ7jHFGeoQjtkW2UjMt9BcnY3vp5Suw9VhsT39Dyjz0Cp1HfJutGnY1TS8kpR0BvvO0afYJ/iH7+skUKdzM5SKjEXSpzc+z2PVwqF2D2177X1B5mwvMfTpy34SjComW986gW3NyBaZeRx6OiMTfqj7ZiR36fjJVJKi7Ex/D4Yk2tv3H9Jo8NhlUbAnmT+9JPmbdKgnOMFvZnPtjjRgD5W/CQON4rNQqWFnVC6Hezp20Nu5lUzW8Wq00pO7qWCrchRdj4TK4oI6Z0N0dTYkWNiNQQdiJfl9NkxamnSo8or569Uu5zO7XawAFz4bD+3l6RwNko0QjA33Nrfu8xHs/TzuDbUXvy1msQkAfveOMm+T8QlHGCLOrxhRplJ8SJXV+MH5VUd51iXCkbgHwkKvTtzvOmMo30ZSyS7KvjOHNdCpa12zbCwa1rzG4XCsK+RlsRcMPI/T9ZvmWQMRgb1FcDkwY91uz+++OTXaMKbPPXXU+JgiyTjKdnb+Y/jHcDhC7BR3XPQXA/OTYErglE5mfoMo89T+A9ZYVlk1MMqLlGgF9PMyJjKqJ8RsT4k/SWp0qDFshOsJC4jiwwsjG19eV+nlCPInFDP2Lsi2+n1sJHZCpsdxJyY1eht1icSUc3F7+G8wUn7NsV6DhNINUUMLi+3WbPF8HFRb/CwHZ6Aa6afv86HgK007TfHfTQ6Ca3DVw63XUTDlnT0bccLRkjg2RWDCxzEehANjz1EQiza4zBiojA35kdx/f4zM4bhNR82XL2b3uehIP4SPImjRQaY3QW9pqeCcNfOrsLBSG3BueQ08NYvg/BlptmY5mA0OwF97Dr+s0VPfyH5znnyr0dMYNLZbcNq2YG/X8JcrihMurEbTmKxDMjqpsxRgDyBIIB0nHJtytMUuBSZI4x7aUaV1Uh2vY2+FeuvzHuB855w/tAUqFk7CNbOg7StrqUUgZNNALnYamaF62EwqZWRXewuMod37yDoo36CYDirM7s4QIrnsIupA6AD9J38EU3e/1nPOGC12TuFYsItR72ta3mLDym2xLoi5ndVUW7TEAepnklYm5Q3HcbjyMsuHUTXdRiKjqNTndi2Y6DIrNopP5Tswx+VmK5W1jRsKfG0qEimjlR89tSeiodT4n0MlqSRqpXuJBPna/wCMbRaVBLKAij1PmdWMrsfxzIRkCtcXudraj10kqbfRbjXZZkRzDICTc8jMli+I1z2+0qnawsv9/OSeE8RqA6sSO/X67wk5YiSVjuP4FSJLZgDlJsL6ty/ffDCcORM1j8x+hNvyjPFOKuCAq6EfMu9+hiKHErqxdQluZ0Bv0vz0hFyoUoxsk1cTTU2zXb7ut+XK22u8zeNwrZmygtfUHuPjLBuI0FNwwvbcKSTc63IHnEfbEb4WB7tj6GaK0RKnop63DWCFr6jW3dCWfvVNwCCel4SsiMTPBzaSKGJI3AI56CRli1lNWKLZd4PFKB2RrtrLHBYtl0BFpmUcCTaOJA5iYTgdEJm3w3EOwbyNhuIBAQOZJOvUmZ+lxNAnf0uAfrIzY/p6H9RMfDfo1XOkbuhxgc5LHGByHqZgaWNA3I+slpjL85jL+OjeP8hNG4w/F9CHsehlRxz2hZVCUfjY2vbUDqo/M+V95RNirAm5P72kei5BLtYu256dwhDgSeTFPltYrX9kmhgGOrvlB1PzOTzJN9z5yzwopUtUF2++2reXTylI+KPWNPiD1mrjJ9kqcY9IZ4yvvMS55EIST3KF/ITQniAVAigZQoUA7WGm3OZupUB1PUH02/ARD1zNWnJJfRgpKLb+2WNZzawbs8k+QeA+XyiaHESfiQaAqLgA25jTQj9e+VRqHrG3BPOUo/ZOddF3iOIlrAEZehAN/ERVHEAa6D+Ua/rKFEtJlCEopAptj+P4k+ym/eQCR4X5ykquzG7Ek9SbmTq66yI6y4UkZybb2MGcMdNoiaGbQgwiiIQFQ0Gig0bvAGVRKY+pEWAOsjhp0PFRSY6wnaSE89Izni0e0KBPZLWkOpjqBep9ZD97NDjMHS+yqUW2Io2OJF2OZKmqmxvYqbA2tuZODZWaTRBWtaOKCbdtBfL8TWtmLC57ha57mB8FcKwtOrQxO/v6aLUTU5TTVgKgyjdrEHXu74mvSpLg6blT7+pVfKcxsKKCxJW9iS5IvpoPOJcfsp8voRUFgTnpm19A1ybPk001v8Q/h1nFW/zoPg3e1s/X+X5unrJ/s/wenVpt7xstStnp4TUge8pgMS3LIxIQXvqTbUSp4bUoo7faadR1CkBEcIwe41ZiDYCx0tvH46J8t2Pmjr/qU/m+ffK4TTTnfMOq3MS1G1u2h1toxNtL3Om3K8tuP0MBSVPdpiS9TDpUW9WmUR3BIVh7sMwB3sRfulZwOnSZmfEX9zTAz2LBiXOVAuXW47T+CGPx06J8lqyM+hIuDYkXBuDbmDzE5ed4nhWo1HpPup0PJlOqsO4gg+c0uB4ZSqmh/kEU2RGrVc7KlMa52LMSL6Egc9oLjb0D5IpJmaEdVo1xN6a1XWgxamHYIzbsoOhMims3WQ4M0UkP4kt18h08ZDYxYc66nX6xDDeWlREnYnNAazimL07vKBIhWtCDP5wjoY3CdhKMwhOoRcX25yalJWFwjW8TfbxibopKyDO5pOOGX7p9fWcXCrfY8+fSTaKxZ3heJRKq1HGYJ2wlgQ7LqitfTLe199BtJuE9oH96Gq5WRmPvVVKa5ke4cdlQToTp3CQ2wyD5T00P13nBhVt8Nzr83ja8anXQnC+yZhsQmFxYKstSmj2LLqr02FmHecrHTqI1xbFU3qgUyVpKERCQbqg1LFeZuzHvjAoJe2Q+N9O/nB6CjXIefPu05x5aoMN2WeN9omDKuHCLTpBUolqNJqll1zlmUkMzFnIvoWkT2gxyVqgqpcM6KaqkWUVNny9QbA+JMjjDKQCFOvf/AHnKtBB8p2Ot9Aep1g53oXjraHuNY1KnucmbsYenTbMLdtc2a3VdY9U4qKdGnQpZGX/UqM1JCTUOmUZwbhVsAed2kY4ZPun1P6zjYVeQIA7/AO8PJuww1RL4xxdcRRo5havTvTJVVVWpDVD2QACvw26R3/r+VaSJmZForTrI4GVzdiSAOmawJ10kA4ZbXyn1O3rErhlJHYNvE3/GPybsT49UIxtJAc1NgyHYEjMvcw385EzSc2HQfKTvselu+dGGXXsnu1PXTn3iS5JlKMkQs8C5k1sOn3T6nntzgcMo1KnS99T+sLQ8WQLzkVUK37IIHfEyiAhCEBBCLFJiLhTbwiIAdW3PaSKLqC2umlrgmRYRNWNOif79Oo/8f7QNZLbj/wAfztIEIsUVkyTQxQW10DW6/wDEbere/ZA366RuEdIWTL5eOUgxYYSlqb2IQgAlMy/B0RgDyzsTfQDi8ao88JTPZVfl+UNdvg+IltT/AArppc0qU2OoBNp0YZ/un0jJLStxemysBhqalqZW65bBiQc4upYNuLZrWtzFy3T4ogKXw6EIGBFl7d6KUwWOW+jKz631buvK/wCzv9xvT99RD7O/3T6QAvMDx+gnvM+BoOH92LHQIFUB8hsWUt2jcG4JG9pK/wDk+GzKx4dQupdiLgK2cNmDKE+EEoVAtlyaHtNfM/Z3+4fSBw7/AHT6QA0OA9oaCIUbBI7FmIdvcZlDFyAL0CDbMNwR2RYAWAp8Vjw1R3WmqK7syoLZUVmLBVsBoL2HhIr0mXVlI8YiFDTolLiri1lHeb/kIr7SP4f6/wD8yFC0nFFZMmDEgfdPgD66gTrYhSLaC4I2N9ZChDFBkyTiQlhlOt/4tvPnI85CNKiW7OwimpMN1PpOxiGW3ihCEAOwhCABCEIAEIQiAbbechCMYQhCABCEIAKWLhCAghCEACEIQAIQhABsQhCAH//Z"
                size="xs"
                iconLabel="아이콘 아바타"
                name="Segun Adebayo"
                loading="lazy"
                ml={-1}
                mr={2}
              />
              <TagLabel>Segun</TagLabel>
            </Tag>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
