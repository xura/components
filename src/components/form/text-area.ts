import { Component, CustomElement, Prop, html } from 'ce-decorators';
import uuid from 'uuid/v5';
import '@material/mwc-textarea';
import { TextArea } from '@material/mwc-textarea';
import { Observable, BehaviorSubject } from 'rxjs'
import { Input } from '../../builder';
import { createTypeStyle, style } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';

const VALIDATION_MESSAGES = {
    REQUIRED: (fieldName: string) => `${fieldName} is required`
}

@Component({
    tag: 'xura-text-area',
    style: ``,
})
export class TextAreaInput extends CustomElement implements Input<string> {

    stream(): Observable<string> {
        return this._stream
    }
    getValue(): string {
        return this._input?.value;
    }

    componentDidRender() {
        this._input = this.shadowRoot.querySelector(`#${this._identifier}`)
        this.icon && this._input?.setAttribute('icon', this.icon)
    }

    private _identifier = `mwc-textarea-${uuid('mwc-textarea', '1b671a64-40d5-491e-99b0-da01ff1f3341')}`

    private _input?: TextArea;

    private _stream: BehaviorSubject<string> = new BehaviorSubject('')

    private _updateValue = (e: Event) => this._stream.next((e.target as TextArea).value)

    @Prop({ type: String })
    label: string = 'Text Area';

    @Prop()
    icon: string;

    @Prop()
    errorMessage: string = '';

    @Prop()
    required: boolean = false

    @Prop({ type: style })
    styles: NestedCSSProperties;

    setValidityMessages(event) {
        const {
            valueMissing
        } = event.currentTarget.validity;

        if (valueMissing && this.required) {
            this._input.setAttribute(
                'validationMessage',
                VALIDATION_MESSAGES.REQUIRED(this.label)
            )
        }

    }

    render() {
        const instance = createTypeStyle();
        const className = instance.style(this.styles)

        return html`<style>${instance.getStyles()}</style><mwc-textarea class=${className} @keyup=${this._updateValue} @blur=${this.setValidityMessages} @input=${this.setValidityMessages} ?required="${this.required}" id='${this._identifier}' label="${this.label}"></mwc-textarea>`;
    }
}