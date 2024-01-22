//package com.nasaapp.wishlist.service;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.nasaapp.wishlist.dto.WishlistDTO;
//import com.nasaapp.wishlist.entity.Wishlist;
//import com.nasaapp.wishlist.exceptions.ImageAlreadyExistsException;
//import com.nasaapp.wishlist.exceptions.ImageDoesNotExistException;
//import com.nasaapp.wishlist.exceptions.WishlistEmptyException;
//import com.nasaapp.wishlist.repository.WishlistRepository;
//
//import lombok.extern.slf4j.Slf4j;
//
//@Service
//@Slf4j
//public class WishlistServiceImpl implements WishlistService {
//
//	@Autowired
//	private WishlistRepository wishlistRepository;
//
//	public WishlistServiceImpl(WishlistRepository wishlistRepository) {
//		// TODO Auto-generated constructor stub
//		this.wishlistRepository = wishlistRepository;
//	}
//
//	@Override
////	@Cacheable(cacheNames = "apodList", key = "'allItems'")
//	public List<WishlistDTO> getAllItems(String username) throws WishlistEmptyException {
//		// TODO Auto-generated method stub
//
//		return wishlistRepository.findByUsername(username).stream()
//				.map(wishlist -> WishlistDTO.builder().copyright(wishlist.getCopyright()).title(wishlist.getTitle())
//						.date(wishlist.getDate()).explanation(wishlist.getExplanation()).hdurl(wishlist.getHdurl())
//						.media_type(wishlist.getMedia_type()).service_version(wishlist.getService_version())
//						.url(wishlist.getUrl()).username(wishlist.getUrl()).build())
//				.collect(Collectors.toList());
//
//	}
//
//	@Override
////	@CacheEvict(cacheNames = "apodList", allEntries = true)
//	public void addToWishlist(WishlistDTO apodDTO) throws ImageAlreadyExistsException {
//		// TODO Auto-generated method stub
//		String url = apodDTO.getUrl();
//		if (wishlistRepository.existsByUrl(url)) {
//			throw new ImageAlreadyExistsException("URL already exists in the wishlist.");
//		}
//
//		Wishlist wishlist = new Wishlist();
//
//		wishlist.setUrl(url);
//		wishlist.setTitle(apodDTO.getTitle());
//		wishlist.setDate(apodDTO.getDate());
//
//		wishlistRepository.save(wishlist);
//
//	}
//
//	@Override
////	@CacheEvict(cacheNames = "apodList", allEntries = true)
//	public void deleteFromWishlist(WishlistDTO apodDTO) throws ImageDoesNotExistException {
//		// TODO Auto-generated method stub
//		String url = apodDTO.getUrl();
//		if (wishlistRepository.existsByUrl(url)) {
//			wishlistRepository.deleteByUrl(url);
//		} else {
//			throw new ImageDoesNotExistException("Image does not exist in the wishlist");
//		}
//	}
//
//}
