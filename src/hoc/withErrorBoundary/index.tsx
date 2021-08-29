/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component, ComponentClass, ComponentType } from 'react'

interface State {
	hasError: boolean
}

export const ErrorBoundary = <T extends Record<string, never>>(
	WrappedComponent: ComponentType<T>
): ComponentClass<T> =>
	class ErrorBoundary extends Component<T, State> {
		constructor(props: T) {
			super(props)
			this.state = { hasError: false }
		}

		static getDerivedStateFromError(_error: Error) {
			return { hasError: true }
		}

		componentDidCatch(error: never, errorInfo: never) {
			console.log(error, errorInfo)
		}

		render() {
			if (this.state.hasError) {
				return (
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							marginTop: '50px',
						}}
					>
						<h1>🛠 Something went wrong! ⚒</h1>
					</div>
				)
			}

			return <WrappedComponent {...this.props} />
		}
	}
