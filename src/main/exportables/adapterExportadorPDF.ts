import { Exportable } from '../exportable';


export interface adapterExportadorPDF{
    exportarApdf(exportable: Exportable): string;


}