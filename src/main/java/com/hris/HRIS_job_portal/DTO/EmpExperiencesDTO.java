package com.hris.HRIS_job_portal.DTO;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

@Getter
@Setter
public class EmpExperiencesDTO {
    @Id
    private String id;
    private String company;
    private String companyLogo;
    private String position;
    private String country;
    private String startDate;
    private String endDate;
    private String description;
}