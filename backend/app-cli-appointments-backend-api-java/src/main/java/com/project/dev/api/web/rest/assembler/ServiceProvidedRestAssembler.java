/*
 * @overview        {ServiceProvidedRestAssembler}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
package com.project.dev.api.web.rest.assembler;

import com.project.dev.api.dto.ServiceProvidedDTO;
import com.project.dev.api.web.rest.ServiceProvidedRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Description of {@code ServiceProvidedRestAssembler}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Component
public class ServiceProvidedRestAssembler implements RepresentationModelAssembler<ServiceProvidedDTO, EntityModel<ServiceProvidedDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<ServiceProvidedDTO> toModel(ServiceProvidedDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ServiceProvidedRest.class).getEntity(String.valueOf(entityDTO.getIntId()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(ServiceProvidedRest.class).getAllEntities()).withRel("ServiceProvided"));
    }
}
