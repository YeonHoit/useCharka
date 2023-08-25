import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export default function TableComponent() {
  return (
    <>
      <TableContainer p={10}>
        <Table>
          <TableCaption>Test Table about fruit</TableCaption>
          <Thead>
            <Tr>
              <Th>number</Th>
              <Th>name</Th>
              <Th>count</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>apple</Td>
              <Td>5</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>banana</Td>
              <Td>3</Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>cherry</Td>
              <Td>8</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>number</Th>
              <Th>name</Th>
              <Th>count</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}
