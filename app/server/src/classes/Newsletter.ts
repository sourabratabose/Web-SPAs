import { z } from "zod";

// Validators
const emailValidator = z.string().email();
const updateValidator = z.object({
  update: z.string(),
  date: z.date()
});
const arrayOfUpdatesValidator = z.array(updateValidator);

// Types, Interfaces and Classes
type Update = z.infer<typeof updateValidator>;

class Newsletter {
  // Properties
  private readonly _email: z.infer<typeof emailValidator>;
  private readonly _signUpDate: Date;
  private _updates: z.infer<typeof arrayOfUpdatesValidator>;

  public constructor(email: string, updates: Update[] = []) {
    const verifiedEmail = emailValidator.safeParse(email);
    if (verifiedEmail.success) this._email = verifiedEmail.data;
    else throw new Error(verifiedEmail.error.message);
    
    this._signUpDate = new Date();

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

  // Setters
  public set updates(updates: typeof this._updates) {
    const verifiedUpdates = arrayOfUpdatesValidator.safeParse(updates);

    if (verifiedUpdates.success) this._updates = verifiedUpdates.data;
    else throw new Error(verifiedUpdates.error.message);
  }

  // Methods
  public addUpdate(newUpdate: Update): typeof this._updates {
    const verifiedUpdate = updateValidator.safeParse(newUpdate);

    if (verifiedUpdate.success) {
      this._updates.push(verifiedUpdate.data);
      return this._updates
    } else throw new Error(verifiedUpdate.error.message);
  }
  public deleteLastUpdate(): typeof this._updates {
    this._updates.pop()
    return this._updates;
  }
}

// Exports
export { Update, updateValidator };
export default Newsletter;