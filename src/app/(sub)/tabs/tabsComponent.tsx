"use client";

import {
  Box,
  Button,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  forwardRef,
  useColorMode,
  useMultiStyleConfig,
  useTab,
} from "@chakra-ui/react";

export default function TabsComponent() {
  /**
   * DarkMode / LightMode
   */
  const { colorMode, toggleColorMode } = useColorMode();

  const tabsProperty = [
    {
      tabText: "One",
      tabPanelText: "1번째 탭 텍스트입니다.",
    },
    {
      tabText: "Two",
      tabPanelText: "2번째 탭 텍스트입니다.",
    },
    {
      tabText: "Three",
      tabPanelText: "3번째 탭 텍스트입니다.",
    },
    {
      tabText: "Four",
      tabPanelText: "4번째 탭 텍스트입니다.",
    },
  ];

  const CustomTab = forwardRef((props, ref) => {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps["aria-selected"];

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig("Tabs", tabProps);

    // 버튼에
    return (
      <Button
        __css={styles.tab}
        {...tabProps}
        tabIndex={0}
        onClick={() => {
          // 버튼 클릭 시 이벤트 커스텀
        }}
        // 2번째 요소의 탭이 비활성화되어야한다면?
        isDisabled={tabProps.children === "Two" ? true : false}
      >
        <Box as="span" mr="1">
          {isSelected ? "😎" : "😐"}
        </Box>
        {tabProps.children}
      </Button>
    );
  });

  return (
    <Box p={6}>
      {/* varient: tab의 bottom라인 삭제 */}
      <Tabs variant="unstyled" defaultIndex={2}>
        <TabList>
          {tabsProperty.map((tab, index) => {
            if (index === 1) {
              return (
                <CustomTab key={index} isDisabled>
                  {tab.tabText}
                </CustomTab>
              );
            } else {
              return <CustomTab key={index}> {tab.tabText}</CustomTab>;
            }
          })}
        </TabList>
        {/* TabIndicator: tab의 활성 bottom라인 지정 */}
        {/* <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="purple.500"
          borderRadius="1px"
        /> */}
        <TabPanels>
          {tabsProperty.map((tab, index) => {
            return <TabPanel key={index}>{tab.tabText}</TabPanel>;
          })}
        </TabPanels>
      </Tabs>
    </Box>
  );
}
