class ObjecToForm {

    object: any;
    formElement: HTMLFormElement;

    constructor(object: any) {
        this.object = object
        this.formElement = document.createElement('form')
        this.renderForm()
    }

    renderForm() {
        for (const key in this.object) {
            if (Object.prototype.hasOwnProperty.call(this.object, key)) {
                const label = document.createElement('label');
                label.textContent = key;

                const input = document.createElement('input');
                input.name = key;
                input.value = this.object[key];

                input.addEventListener('input', (event) => {
                this.object[key] = (event.target as HTMLInputElement).value;
                });

                this.formElement.appendChild(label);
                this.formElement.appendChild(input);
            }
        }

        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Submit';
        this.formElement.appendChild(submitButton);
    }

    onSubmit(callback: (object: any) => void) {
        this.formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        callback(this.object);
        });
    }

    getFormElement() {
        return this.formElement;
    }
}

export default ObjecToForm
  