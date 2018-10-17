package com.qa.cv.controller;

import java.util.List;
import java.util.Optional;

import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.qa.cv.model.Person;
import com.qa.cv.repo.PersonRepository;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://192.168.1.113", maxAge=3600)
@RestController
@RequestMapping("/api")
public class PersonController {
	@Autowired
	private PersonRepository repository;
	
	@RequestMapping(value = "/people", method = RequestMethod.GET)
	public List<Person> getPeople() {
		return repository.findAll();
	}
	
	@RequestMapping(value = "/people/{id}", method = RequestMethod.PUT)
	  public Person modifyPersonById(@PathVariable String id, @RequestBody Person person) {
	    repository.save(person);
	    return person;
	  }
	
	@RequestMapping(value="/people",method=RequestMethod.POST)
	public Person createPerson(@RequestBody Person person) {
		repository.save(person);
		return person;
	}
	
	@RequestMapping(value = "/people/{id}", method = RequestMethod.GET)
	  public Optional<Person> getPersonById(@PathVariable("id") String id) {
	    return(repository.findById(id));
	    
	}
	
	@RequestMapping(value="/people/{id}",method=RequestMethod.DELETE)
	public Person deletePerson(@PathVariable String id, Person person) {
		repository.delete(person);
		return person;
	}
	
	@RequestMapping(value="/people/{id}/n",method=RequestMethod.POST)
	public Person updateState(@PathVariable("id") String id, @RequestBody String state) {
		return repository.save(repository.findById(id).get().setState(state));
	}
	
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String checkLogin(@RequestBody Person user) {
		
		System.out.println("sdjfjdxjfdjs");
		
		List<Person> p = repository.findByEmail(user.getEmail());
		
		for (Person o : p) {
			if (o.getPassword().equals(user.getPassword())) {
				return o.getRole();
			}
		}
		return "NOTFOUND";
	}
	
	
//	@PostMapping("/upload")
//	public String singleFileUpload(@RequestParam("file") MultipartFile multipart, @RequestParam("email") String email) {
//	    try {
//	        Person demoDocument = new Person();
//	        demoDocument.setEmail(email);
//	        demoDocument.setDocType("pictures");
//	        demoDocument.setFile(new Binary(BsonBinarySubType.BINARY, multipart.getBytes()));
//	        mongoTemplate.insert(demoDocument);
//	        System.out.println(demoDocument);
//	    } catch (Exception e) {
//	        e.printStackTrace();
//	        return "failure";
//	    }
//	    return "success";
//	}
}
