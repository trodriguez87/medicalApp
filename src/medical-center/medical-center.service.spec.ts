import { Test, TestingModule } from '@nestjs/testing';
import { MedicalCenterService } from './medical-center.service';

describe('MedicalCenterService', () => {
  let service: MedicalCenterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalCenterService],
    }).compile();

    service = module.get<MedicalCenterService>(MedicalCenterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
