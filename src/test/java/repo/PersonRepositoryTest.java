package repo;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.qa.cv.Application;
import com.qa.cv.model.Person;
import com.qa.cv.repo.PersonRepository;



@RunWith(SpringRunner.class)
@SpringBootTest(classes = {Application.class})
@DataJpaTest
public class PersonRepositoryTest {
	
	@Autowired
	private TestEntityManager entityManager; 
	
	@Autowired
	private PersonRepository myRepo; 
	
	//Clear the repository before each test
	@Before
	public void deleteAllBeforeTests() throws Exception {
		myRepo.deleteAll();
	}
	
	@Test
	public void retrieveByNameTest()
	{
		Person model1 = new Person("lwhamilton03@outlook.com", "Lucy Hamilton", "Trainee", "password", "CVLink1", "unapproved");
		entityManager.persist(model1); 
		entityManager.flush();
		System.out.println(model1.getName());
		assertEquals("Lucy Hamilton", myRepo.findByName(model1.getName()));
	}
	
	//@After

}