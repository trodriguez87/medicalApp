import { Test, TestingModule } from '@nestjs/testing';
import { MedicalEntityService } from './medical-entity.service';

describe('MedicalEntityService', () => {
  let service: MedicalEntityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalEntityService],
    }).compile();

    service = module.get<MedicalEntityService>(MedicalEntityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
