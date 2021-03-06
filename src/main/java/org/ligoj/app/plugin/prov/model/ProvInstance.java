package org.ligoj.app.plugin.prov.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

import org.ligoj.app.api.NodeScoped;
import org.ligoj.app.model.Node;
import org.ligoj.bootstrap.core.model.AbstractDescribedEntity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;

/**
 * An instance with characteristics
 */
@Getter
@Setter
@Entity
@Table(name = "LIGOJ_PROV_INSTANCE", uniqueConstraints = @UniqueConstraint(columnNames = { "name", "node" }))
public class ProvInstance extends AbstractDescribedEntity<Integer> implements NodeScoped {

	/**
	 * SID
	 */
	private static final long serialVersionUID = 4795855466011388616L;

	/**
	 * Amount of CPU. When <code>0</code>, correspond to a custom instance.
	 */
	@NotNull
	private Double cpu;

	/**
	 * RAM (Memory) in "Mo" = "Mega Bytes"
	 */
	@NotNull
	private Integer ram;

	/**
	 * When <code>true</code> the delivery power is constant over time.
	 * Otherwise, is variable.
	 */
	@NotNull
	private Boolean constant;

	/**
	 * The related node (VM provider) of this instance.
	 */
	@NotNull
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	private Node node;

	/**
	 * Indicates this instance is customizable.
	 * 
	 * @return <code>true</code> when this instance is customizable.
	 */
	@JsonIgnore
	public boolean isCustom() {
		return cpu == 0;
	}

}
