import { IconButton, styled, TableContainer, Theme } from "@material-ui/core";

const NavListButton = styled(IconButton)(
  ({ theme, $panelOpen }: { theme?: Theme, $panelOpen: boolean }) => ({
    display: "inline-block",
    width: 48,
    height: 48,
    borderRadius: 24,
    margin: theme?.spacing(1),
    backgroundColor: $panelOpen ? theme?.palette.secondary.dark : "transparent"
  })
);

// using pure styled component
const PrintableTableContainerSC = styled(TableContainer)`
  @media print {
    @page {
      size: landscape;
    }
  }
`;

// using material-ui styled
const PrintableTableContainer = styled(TableContainer)(() => ({
  "@media print": {
    "@page": { size: "landscape" }
  }
}));

export default function App() {
  return (
    <div className="App">
      <NavListButton $panelOpen={true} />
      <NavListButton $panelOpen={false} />
      <PrintableTableContainerSC />
      <PrintableTableContainer />
    </div>
  );
}
