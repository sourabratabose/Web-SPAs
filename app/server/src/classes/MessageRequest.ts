import { z } from "zod";

// Validators
const nameValidator = z.string().min(5).max(20);
const companyNameValidator = z.string().min(1).max(20).optional();
const emailValidator = z.string().email().min(5).max(50);
const messageValidator = z.string().min(10).max(200);
const messageIdValidator = z.number().min(0).default(0);
const messageRequestValidator = z.object({
  name: nameValidator,
  companyName: companyNameValidator,
  email: emailValidator,
  message: messageValidator
})

// Types, Interfaces and Classes
class MessageRequest {
  // Properties
  private readonly _name: z.infer<typeof nameValidator>;
  private readonly _companyName?: z.infer<typeof companyNameValidator>;
  private readonly _email: z.infer<typeof emailValidator>;
  private readonly _message: z.infer<typeof messageValidator>;
  private _messageId: z.infer<typeof messageIdValidator> = 0;

  constructor(
    name: z.infer<typeof nameValidator>,
    companyName: z.infer<typeof companyNameValidator>,
    email: z.infer<typeof emailValidator>,
    message: z.infer<typeof messageValidator>
  ) {
    const validName = nameValidator.safeParse(name);
    if (validName.success) this._name = name;
    else throw new Error(validName.error?.message);

    const validCompanyName = companyNameValidator.safeParse(companyName);
    if (validCompanyName.success) this._companyName = companyName;
    else throw new Error(validCompanyName.error?.message);

    const validEmail = emailValidator.safeParse(email);
    if (validEmail.success) this._email = email;
    else throw new Error(validEmail.error?.message);

    const validMessage = messageValidator.safeParse(message);
    if (validMessage.success) this._message = message;
    else throw new Error(validMessage.error?.message);
  }

  // Getters
  public get name(): typeof this._name {
    return this._name;
  }
  public get companyName(): typeof this._companyName {
    return this._companyName;
  }
  public get email(): typeof this._email {
    return this._email;
  }
  public get message(): typeof this._message {
    return this._message;
  }
  public get messageId(): typeof this._messageId {
    return this._messageId
  }

  // Setters
  public set messageId(newId: typeof this._messageId) {
    const validId = messageIdValidator.safeParse(newId);
    if (validId.success) this._messageId = newId;
    else throw new Error(validId.error.message);
  }
} 

// Exports
export { messageRequestValidator };
export default MessageRequest;