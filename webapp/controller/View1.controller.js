sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("salseorder.controller.View1", {
        onInit: function () {

        },
        onSelect:function(oAction){

            var key = oAction.getParameter("selectedItem").mProperties.key

            // var key = oData.selectedItem. 
            // BusinessPartnerSet('0100000000')/ToSalesOrders

            var entity = "/BusinessPartnerSet('"+key+"')/ToSalesOrders"

            console.log(entity);

8
            var oModel= this.getOwnerComponent().getModel();
            var that = this

            console.log(oModel);
            
            oModel.read(entity,{
                success:function(oData,res){
                    var oModel1 = new JSONModel(oData)

                    that.getView().setModel(oModel1,"dc")
                    
                },
                error:function(){
                    console.log("error");
                    
                }
            })
            // oModel.read(path,{
            //     success: function(odata,res){

            //         if(res.statusCode==="200" || res.statusText==="OK"){
            //             console.log(odata);
                        
            //             var oModel1 = new JSONModel(odata);
            //             that.getView().setModel(oModel1,"dc")

            //         }
            //     }
            // })
            

        }
    });
});
