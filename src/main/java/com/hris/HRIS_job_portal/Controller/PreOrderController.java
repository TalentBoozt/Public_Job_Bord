package com.hris.HRIS_job_portal.Controller;

import com.hris.HRIS_job_portal.Model.PreOrderModel;
import com.hris.HRIS_job_portal.Service.PreOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v2/preorder")
public class PreOrderController {

    @Autowired
    private PreOrderService preOrderService;

    @PostMapping("/add")
    public PreOrderModel addPreOrder(@RequestBody PreOrderModel preOrderModel) {
        return preOrderService.addPreOrder(preOrderModel);
    }

    @PutMapping("/update/{id}")
    public PreOrderModel updatePreOrder(@RequestBody PreOrderModel preOrderModel, @PathVariable String id) {
        return preOrderService.updatePreOrder(preOrderModel, id);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletePreOrder(@PathVariable String id) {
        return preOrderService.deletePreOrder(id);
    }

    @GetMapping("/all")
    public List<PreOrderModel> getPreOrders() {
        return preOrderService.getPreOrders();
    }

    @GetMapping("/get/{id}")
    public PreOrderModel getPreOrder(@PathVariable String id) {
        return preOrderService.getPreOrder(id);
    }
}
