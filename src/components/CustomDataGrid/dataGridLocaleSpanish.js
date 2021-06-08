export const DATAGRID_SPANISH_TEXT = {
  // Root
  rootGridLabel: "grid",
  noRowsLabel: "No se encontraron registros.",
  noResultsOverlayLabel: "No se encontraron registros..",
  errorOverlayDefaultLabel: "Ha ocurrido un error.",

  // Density selector toolbar button text
  toolbarDensity: "Interlineado",
  toolbarDensityLabel: "Interlineado",
  toolbarDensityCompact: "Compacta",
  toolbarDensityStandard: "Estándar",
  toolbarDensityComfortable: "Cómoda",

  // Columns selector toolbar button text
  toolbarColumns: "Columnas",
  toolbarColumnsLabel: "Seleccionar columnas",

  // Filters toolbar button text
  toolbarFilters: "Filtros",
  toolbarFiltersLabel: "Mostrar filtros",
  toolbarFiltersTooltipHide: "Ocultar filtros",
  toolbarFiltersTooltipShow: "Mostrar filtros",
  toolbarFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} filtros activos` : `${count} solo filtro activo`,

  // Export selector toolbar button text
  toolbarExport: "Exportar",
  toolbarExportLabel: "Exportar",
  toolbarExportCSV: "Descargar como CSV",

  // Columns panel text
  columnsPanelTextFieldLabel: "Buscar columna",
  columnsPanelTextFieldPlaceholder: "Nombre de columna",
  columnsPanelDragIconLabel: "Reordenar columnas",
  columnsPanelShowAllButton: "Mostrar todas",
  columnsPanelHideAllButton: "Ocultar todas",

  // Filter panel text
  filterPanelAddFilter: "Agregar filtro",
  filterPanelDeleteIconLabel: "Borrar",
  filterPanelOperators: "Operadores",
  filterPanelOperatorAnd: "y",
  filterPanelOperatorOr: "o",
  filterPanelColumns: "Columnas",
  filterPanelInputLabel: "Valores",
  filterPanelInputPlaceholder: "Filtrar valores",

  // Filter operators text
  filterOperatorContains: "contiene",
  filterOperatorEquals: "igual",
  filterOperatorStartsWith: "comienza con",
  filterOperatorEndsWith: "acaba con",
  filterOperatorIs: "igual a",
  filterOperatorNot: "diferente a",
  filterOperatorAfter: "posterior a",
  filterOperatorOnOrAfter: "igual o posterior a",
  filterOperatorBefore: "antes de",
  filterOperatorOnOrBefore: "igual o antes de",

  // Filter values text
  filterValueAny: "cualquiera",
  filterValueTrue: "verdadero",
  filterValueFalse: "falso",

  // Column menu text
  columnMenuLabel: "Menú",
  columnMenuShowColumns: "Mostrar columnas",
  columnMenuFilter: "Filtrar",
  columnMenuHideColumn: "Ocultar",
  columnMenuUnsort: "Eliminar orden",
  columnMenuSortAsc: "Ordenar ascendente",
  columnMenuSortDesc: "Ordenar descendente",

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} filtros activos` : `${count} filtro activo`,
  columnHeaderFiltersLabel: "Ver filtros",
  columnHeaderSortIconLabel: "Ordenar",

  // Rows selected footer text
  footerRowSelected: (count) =>
    count !== 1
      ? `${count.toLocaleString()} columnas seleccionadas`
      : `${count.toLocaleString()} columna seleccionada`,

  // Total rows footer text
  footerTotalRows: "Columnas totales:",

  // Checkbox selection text
  checkboxSelectionHeaderName: "Selección de checkbox",

  // Boolean cell text
  booleanCellTrueLabel: "verdadero",
  booleanCellFalseLabel: "falso",
};
