export const Severity = {
	DANGER: 'danger',
	PRIMARY: 'primary',
	SUCCESS: 'success',
	WARNING: 'warning',
} as const;

export type Severity = (typeof Severity)[keyof typeof Severity];

export function getSeverityClassName(severity?: Severity): string | undefined {
	if (severity === undefined) {
		return undefined;
	}

	return {
		[Severity.DANGER]: 'severity--danger',
		[Severity.PRIMARY]: 'severity--primary',
		[Severity.SUCCESS]: 'severity--success',
		[Severity.WARNING]: 'severity--warning',
	}[severity];
}
