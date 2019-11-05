import { ContributorService } from './contributor.service';

describe('ContributorService', () => {
  let service: ContributorService;

  beforeEach(() => {
    service = new ContributorService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('all should have a valid avatar', async () => {
    // The "callback" argument is called with either true or false
    // depending on whether the image at "url" exists or not.
    async function imageExists(url) {
      return new Promise(
        (resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(`Valid image: ${url}`);
          img.onerror = () => reject(`Not a valid image: ${url}`);
          img.src = url;
        }
      );
    }

    for (const c of service.all) {
      const exists = await imageExists(c.avatar);
      expect(exists).toBeTruthy();
    }
  });

  it('should have some accepting donations', () => {
    expect(service.getDonatable().length).toBeGreaterThan(0);
  });

});
