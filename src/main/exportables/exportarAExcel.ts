import { estrategiaDeExportacion } from "../estrategiaDeImportacion";
import { Exportable } from "../exportable";

export class exportarAExcel implements estrategiaDeExportacion{
   
    public exportar(exportable: Exportable): string {
        // acá se inserta el codigo de terceros
        return "";
    } 


}