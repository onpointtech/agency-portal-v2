/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from "@angular/core";
var OptSsnPipe = /** @class */ (function () {
    function OptSsnPipe() {
    }
    /**
     * @param {?} ssn
     * @return {?}
     */
    OptSsnPipe.prototype.transform = /**
     * @param {?} ssn
     * @return {?}
     */
    function (ssn) {
        /** @type {?} */
        var newSSN = "";
        if (ssn.length == 9) {
            for (var count = 0; count < ssn.length; count++) {
                if ((count == 3) || (count == 5)) {
                    newSSN += "-";
                }
                if ((count >= 0) && (count <= 4)) {
                    newSSN += "X";
                }
                else {
                    newSSN += ssn.charAt(count);
                }
            }
            return newSSN;
        }
        else if (ssn.length == 4) {
            for (var count = 0; count < 9; count++) {
                if ((count == 3) || (count == 5)) {
                    newSSN += "-";
                }
                if ((count >= 0) && (count <= 4)) {
                    newSSN += "X";
                }
                else {
                    newSSN += ssn.charAt(count - 5);
                }
            }
            return newSSN;
        }
        else {
            return ssn;
        }
    };
    OptSsnPipe.decorators = [
        { type: Pipe, args: [{ name: 'optSsnPipe' },] }
    ];
    return OptSsnPipe;
}());
export { OptSsnPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0LXNzbi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vb3B0LWxpYnJhcnkvIiwic291cmNlcyI6WyJjdXN0b20tcGlwZXMvb3B0LXNzbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRDtJQUFBO0lBa0NBLENBQUM7Ozs7O0lBaENHLDhCQUFTOzs7O0lBQVQsVUFBVSxHQUFXOztZQUNiLE1BQU0sR0FBVyxFQUFFO1FBQ3ZCLElBQUcsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDaEIsS0FBSSxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUM7Z0JBQzNDLElBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEVBQUM7b0JBQzVCLE1BQU0sSUFBSSxHQUFHLENBQUE7aUJBQ2hCO2dCQUVELElBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEVBQUU7b0JBQzdCLE1BQU0sSUFBSSxHQUFHLENBQUE7aUJBQ2hCO3FCQUFNO29CQUNILE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMvQjthQUNKO1lBQ0QsT0FBTyxNQUFNLENBQUM7U0FDakI7YUFBTSxJQUFHLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLEtBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ25DLElBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEVBQUM7b0JBQzVCLE1BQU0sSUFBSSxHQUFHLENBQUE7aUJBQ2hCO2dCQUVELElBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEVBQUU7b0JBQzdCLE1BQU0sSUFBSSxHQUFHLENBQUE7aUJBQ2hCO3FCQUFNO29CQUNILE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDbkM7YUFDSjtZQUNELE9BQU8sTUFBTSxDQUFDO1NBQ2pCO2FBQU07WUFDSCxPQUFPLEdBQUcsQ0FBQztTQUNkO0lBQ0wsQ0FBQzs7Z0JBakNKLElBQUksU0FBQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUM7O0lBa0MxQixpQkFBQztDQUFBLEFBbENELElBa0NDO1NBakNZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBQaXBlKHtuYW1lOiAnb3B0U3NuUGlwZSd9KVxyXG5leHBvcnQgY2xhc3MgT3B0U3NuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHNzbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgbmV3U1NOOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGlmKHNzbi5sZW5ndGggPT0gOSkge1xyXG4gICAgICAgICAgICBmb3IodmFyIGNvdW50ID0gMDsgY291bnQgPCBzc24ubGVuZ3RoOyBjb3VudCsrKXtcclxuICAgICAgICAgICAgICAgIGlmKChjb3VudCA9PSAzKSB8fCAoY291bnQgPT0gNSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1NTTiArPSBcIi1cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKChjb3VudCA+PSAwKSAmJiAoY291bnQgPD0gNCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdTU04gKz0gXCJYXCJcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3U1NOICs9IHNzbi5jaGFyQXQoY291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXdTU047XHJcbiAgICAgICAgfSBlbHNlIGlmKHNzbi5sZW5ndGggPT0gNCkge1xyXG4gICAgICAgICAgICBmb3IodmFyIGNvdW50ID0gMDsgY291bnQgPCA5OyBjb3VudCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZigoY291bnQgPT0gMykgfHwgKGNvdW50ID09IDUpKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXdTU04gKz0gXCItXCJcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZigoY291bnQgPj0gMCkgJiYgKGNvdW50IDw9IDQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3U1NOICs9IFwiWFwiXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1NTTiArPSBzc24uY2hhckF0KGNvdW50IC0gNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ld1NTTjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc3NuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==