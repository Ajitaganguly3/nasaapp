package com.nasaapp.wishlist.caching;

import java.util.concurrent.TimeUnit;

import javax.cache.CacheManager;
import javax.cache.configuration.MutableConfiguration;
import javax.cache.expiry.CreatedExpiryPolicy;
import javax.cache.expiry.Duration;

import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableCaching
public class CacheConfig {
//	@Bean
//	public JCacheManagerCustomizer cacheManagerCustomizer() {
//		return new JCacheManagerCustomizer() {
//
//			@Override
//			public void customize(CacheManager cacheManager) {
//				// TODO Auto-generated method stub
//				cacheManager.createCache("apodCache", new MutableConfiguration<>()
//						.setExpiryPolicyFactory(CreatedExpiryPolicy.factoryOf(new Duration(TimeUnit.MINUTES, 5)))
//						.setStoreByValue(false).setStatisticsEnabled(true));
//
//			}
//		};
//	}
}
