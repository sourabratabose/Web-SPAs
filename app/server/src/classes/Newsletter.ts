import { z } from "zod";

// Validators
const emailValidator = z.string().email();
const activeValidator = z.boolean();
const dateValidator = z.date();
const updateValidator = z.object({
  update: z.enum(['subscribe', 'unsubscribe']),
  date: z.date(),
});
const arrayOfUpdatesValidator = z.array(updateValidator);

// Types, Interfaces and Classes
type Update = z.infer<typeof updateValidator>;

class Newsletter {
  // Properties
  private readonly _email: z.infer<typeof emailValidator>;
  private readonly _signUpDate: Date;
  private _updates: z.infer<typeof arrayOfUpdatesValidator>;
  private _active: z.infer<typeof activeValidator>;

  public constructor(
    email: typeof this._email,
    active: typeof this._active = true,
    signUpDate: typeof this._signUpDate = new Date(),
    updates: typeof this._updates = []
  ) {
    const verifiedEmail = emailValidator.safeParse(email);
    if (verifiedEmail.success) this._email = verifiedEmail.data;
    else throw new Error(verifiedEmail.error.message);

    const verifiedActive = activeValidator.safeParse(active);
    if (verifiedActive.success) this._active = verifiedActive.data;
    else throw new Error(verifiedActive.error.message);

    const verifiedDate = dateValidator.safeParse(signUpDate);
    if (verifiedDate.success) this._signUpDate = verifiedDate.data;
    else throw new Error(verifiedDate.error.message);

    const verifiedUpdates = arrayOfUpdatesValidator.safeParse(updates);
    if (verifiedUpdates.success) this._updates = updates;
    else throw new Error(verifiedUpdates.error.message);
    return this;
  }

  // Getters
  public get email(): typeof this._email {
    return this._email;
  }
  public get signUpDate(): typeof this._signUpDate {
    return this._signUpDate;
  }
  public get updates(): typeof this._updates {
    return this._updates;
  }
  public get active(): typeof this._active {
    return this._active
  }

  // Setters
  public set updates(newUpdates: typeof this._updates) {
    const verifiedUpdates = arrayOfUpdatesValidator.safeParse(newUpdates);

    if (verifiedUpdates.success) this._updates = verifiedUpdates.data;
    else throw new Error(verifiedUpdates.error.message);
  }
  public set active(newActive: typeof this._active) {
    const verifiedActive = activeValidator.safeParse(newActive);

    if (verifiedActive.success) this._active = verifiedActive.data;
    else throw new Error(verifiedActive.error.message);
  }

  // DB interactions
  public commitToDB() {}
}

// Exports
export { Update, updateValidator };
export default Newsletter;
