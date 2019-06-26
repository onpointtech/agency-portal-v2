import { ToastrService, ToastContainerDirective } from 'ngx-toastr';
export declare class ToasterService {
    private toastr;
    overlayContainer: ToastContainerDirective;
    constructor(toastr: ToastrService);
    success(title: string, text: string): void;
    info(title: string, text: string): void;
    warning(title: string, text: string): void;
    danger(title: string, text: string): void;
}
