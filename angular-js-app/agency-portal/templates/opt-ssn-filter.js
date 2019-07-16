var app = angular.module('agencyPortal');

app.filter('optSsnFilter', function() {
    var ssnPipe = function(ssn) {
        var newSSN = "";
        if(ssn != null){
            if(ssn.length == 9) {
                for(var count = 0; count < ssn.length; count++){
                    if((count == 3) || (count == 5)){
                        newSSN += "-"
                    }

                    if((count >= 0) && (count <= 4)) {
                        newSSN += "X"
                    } else {
                        newSSN += ssn.charAt(count);
                    }
                }
                return newSSN;
            } else if(ssn.length == 4) {
                for(var count = 0; count < 9; count++) {
                    if((count == 3) || (count == 5)){
                        newSSN += "-"
                    }

                    if((count >= 0) && (count <= 4)) {
                        newSSN += "X"
                    } else {
                        newSSN += ssn.charAt(count - 5);
                    }
                }
                return newSSN;
            } else {
                return ssn;
            }
        } else {
            return null;
        }
    }
    return ssnPipe;
});