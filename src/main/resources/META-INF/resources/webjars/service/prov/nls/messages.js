define({
	'root' : {
		'service:prov' : 'Provisioning',
		'service:prov:manage' : 'Manage',
		'service:prov:instances-block' : 'Instances',
		'service:prov:storages-block' : 'Storages',
		'service:prov:os' : 'OS',
		'service:prov:os-title' : 'Operating System',
		'service:prov:os-help' : 'Operating System pre-installed for this instance. The instance price includes the corresponding licence, and is often in relation to the amount of running CPU',
		'service:prov:cpu' : 'CPU',
		'service:prov:cpu-title' : 'Operating System',
		'service:prov:cpu-help' : 'The requested CPU. The best instance matching to this requirement may include more than this amount. So it is important to request a balanced resource (CPU/RAM) to limit this loss',
		'service:prov:ram' : 'RAM',
		'service:prov:ram-title' : 'Memory, in MB',
		'service:prov:ram-help' : 'The requested memory in MB. The best instance matching to this requirement may include more than this amount. So it is important to request a balanced resource (CPU/RAM) to limit this loss',
		'service:prov:instance-name' : 'Server',
		'service:prov:instance-name-title' : 'Logical server name',
		'service:prov:instance' : 'Instance',
		'service:prov:instance-title' : 'VM type with predefined resources',
		'service:prov:instance-help' : 'The best instance matching to the required resourece',
		'service:prov:instance-custom' : 'Custom instance',
		'service:prov:instance-custom-title' : 'VM type with custom resources',
		'service:prov:instance-deleted' : 'Instance "{{[0]}}" ({{[1]}}) is deleted',
		'service:prov:instance-choice' : 'The best instance of the provider is determinated from the provided requirements',
		'service:prov:price-type' : 'Usage',
		'service:prov:price-type-title' : 'Price condition and usage',
		'service:prov:price-type-help' : 'Price condition, period and contract. In general, the shorter is the contract, the more expensive is the instance',
		'service:prov:storage' : 'Storage',
		'service:prov:storage-title' : 'Block Storage, in GB',
		'service:prov:storage-type' : 'Type',
		'service:prov:storage-type-title' : 'Storage type of the provider',
		'service:prov:storage-frequency' : 'Frequency',
		'service:prov:storage-frequency-help' : 'How often the stored data is accessed',
		'service:prov:storage-frequency-title' : 'Storage frequency access',
		'service:prov:storage-frequency-cold' : 'Cold',
		'service:prov:storage-frequency-cold-title' : 'Infrequent access, low latency. Not suitable fot boot instance',
		'service:prov:storage-frequency-hot' : 'Hot',
		'service:prov:storage-frequency-hot-title' : 'Frequent access, medium to high latency',
		'service:prov:storage-frequency-archive' : 'Archive',
		'service:prov:storage-frequency-archive-title' : 'Very infrequent access, or high latency. Not suitable for instance',
		'service:prov:storage-optimized' : 'Optimized',
		'service:prov:storage-optimized-title' : 'Storage optimization purpose',
		'service:prov:storage-optimized-help' : 'What is the most important for this storage',
		'service:prov:storage-optimized-throughput' : 'Throughput',
		'service:prov:storage-optimized-throughput-title' : 'Data volume exchange, generally HDD based storage',
		'service:prov:storage-optimized-iops' : 'IOPS',
		'service:prov:storage-optimized-iops-title' : 'I/O per seconds, generally SSD based storage',
		'service:prov:storage-size' : 'Size',
		'service:prov:storage-size-title' : 'Block size in GB',
		'service:prov:storage-deleted' : 'Storage "{{[0]}}" ({{[1]}}) is deleted',
		'service:prov:cost' : 'Cost',
		'service:prov:cost-title' : 'Monthly billed',
		'service:prov:resources' : 'Resources',
		'service:prov:total-ram' : 'Total memory',
		'service:prov:total-cpu' : 'Total CPU',
		'service:prov:total-storage' : 'Total storage',
		'service:prov:nb-instances': 'Number of instances',
		'service:prov:cost-month' : 'Month'
	},
	'fr' : true
});
